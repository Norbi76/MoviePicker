import React, { useEffect, useState } from "react";
import Container from "./Container";
import { exportedAnswers } from "./QuestionsComponent";
import Button from "./Button";

const special_button = `
    #special-button {
        background-color: rgba(255, 0, 0, 0.85);
        border: 2px solid rgba(255, 0, 0, 0.85);
    }

    #special-button:hover {
        background-color: rgba(255, 0, 0, 0.1);
    }  
`;

function RecommendationComponent({ onReachedEnd }) {
    const [backToHome, setBackToHome] = useState(false);
    const [recommendations, setRecommendationsData] = useState([]);
    const [currentRecommandtionIndex, setCurrentRecommandtionIndex] = useState(0);
    const posterPath = "https://image.tmdb.org/t/p/w200/";

    useEffect(() => {
        if (onReachedEnd && backToHome) {
            onReachedEnd();
        }
    }, [backToHome, onReachedEnd]);

    useEffect(() => {
        fetch("/movies.json")
            .then(res => res.json())
            .then(data => {
                const allMovies = Object.values(data);
                const topRecommendations = generateRecommendations(allMovies);
                setRecommendationsData(topRecommendations);
                console.log(recommendations)
            })
            .catch(err => console.error("Failed to fetch movies:", err));
    }, []);

    // ----------------- Inference Logic ------------------

    const matchGenres = (movie, selectedGenres) => {
        if (!selectedGenres || selectedGenres.length === 0) return true;
        if (!movie.genres || movie.genres.length === 0) return false;
        const movieGenres = movie.genres.map(g => g.name.toLowerCase());
        return selectedGenres.some(genre =>
            movieGenres.includes(genre.toLowerCase())
        );
    };

    const matchYear = (movie, yearCriteria) => {
        if (!yearCriteria) return true;
        if (!movie.release_date) return false;
        const movieYear = new Date(movie.release_date).getFullYear();
        if (Array.isArray(yearCriteria)) {
            const [minYear, maxYear] = yearCriteria;
            return (!minYear || movieYear >= minYear) &&
                   (!maxYear || movieYear <= maxYear);
        }
        return movieYear >= yearCriteria;
    };

    const matchRuntime = (movie, runtimeCriteria) => {
        if (!runtimeCriteria) return true;
        if (!movie.runtime) return false;
        const [minTime, maxTime] = runtimeCriteria;
        return (!minTime || movie.runtime >= minTime) &&
               (!maxTime || movie.runtime <= maxTime);
    };

    const matchRating = (movie, minRating) => {
        if (!minRating) return true;
        if (!movie.vote_average) return false;
        return movie.vote_average >= minRating;
    };

    const matchPopularity = (movie, minPopularity) => {
        if (!minPopularity) return true;
        if (!movie.popularity) return false;
        return movie.popularity >= minPopularity;
    };

    const generateRecommendations = (allMovies) => {
        try {
            const selectedGenres = Array.isArray(exportedAnswers.genre)
                ? exportedAnswers.genre
                : exportedAnswers.genre ? [exportedAnswers.genre] : [];

            let filteredMovies = allMovies;

            filteredMovies = filteredMovies.filter(movie =>
                matchGenres(movie, selectedGenres)
            );

            if (filteredMovies.length > 0) {
                filteredMovies = filteredMovies.filter(movie =>
                    matchYear(movie, exportedAnswers.year)
                );
            }

            if (filteredMovies.length > 0) {
                filteredMovies = filteredMovies.filter(movie =>
                    matchRuntime(movie, exportedAnswers.time)
                );
            }

            if (filteredMovies.length > 0) {
                filteredMovies = filteredMovies.filter(movie =>
                    matchRating(movie, exportedAnswers.rating)
                );
            }

            if (filteredMovies.length > 0) {
                filteredMovies = filteredMovies.filter(movie =>
                    matchPopularity(movie, exportedAnswers.popularity)
                );
            }

            const sortedMovies = filteredMovies.sort((a, b) => {
                const scoreA = (a.vote_average || 0) + (a.popularity || 0) / 10;
                const scoreB = (b.vote_average || 0) + (b.popularity || 0) / 10;
                return scoreB - scoreA;
            });

            return sortedMovies.slice(0, 10);
        } catch (error) {
            console.error("Recommendation error:", error);
            return [];
        }
    };

    // -----------------------------------------------------

    const currentMovie = recommendations[currentRecommandtionIndex];

    return (
        <Container>
            <style>{special_button}</style>
            {currentMovie && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="movie_poster">
                        <img src={`${posterPath}${currentMovie.poster_path}`} alt="poster" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: "100%", paddingRight: "50px", paddingLeft: "50px" }}>
                        <h2 style={{ margin: "0", marginBottom: "15px" }}>{currentMovie.title}</h2>
                        <p style={{ margin: "0", marginBottom: "15px", fontSize: "12px" }}><strong>Movie description: </strong>{currentMovie.overview}</p>
                        <p><strong>Release date: </strong>{currentMovie.release_date}</p>
                        <p><strong>Runtime: </strong>{currentMovie.runtime} min</p>
                        <p><strong>Rating: </strong>{currentMovie.vote_average}/10</p>
                        <p><strong>Popularity: </strong>{currentMovie.popularity}</p>
                        <p><strong>Language: </strong>{currentMovie.original_language}</p>
                        <p><strong>Genres: </strong>{currentMovie.genres.map(g => g.name).join(", ")}</p>
                    </div>
                </div>
            )}
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <Button onClick={() => {
                    setCurrentRecommandtionIndex(prevIndex =>
                        (prevIndex + 1) % recommendations.length
                    );
                }}>
                    Try again
                </Button>
                <Button onClick={() => setBackToHome(true)} id="special-button">
                    Restart (Go back to Home)
                </Button>
            </div>
        </Container>
    );
}

export default RecommendationComponent;
