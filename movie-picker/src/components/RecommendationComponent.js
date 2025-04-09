import React, { useEffect, useState, useRef, use } from "react";
import Container from "./Container";
import { exportedAnswers } from "./QuestionsComponent";
import Button from "./Button";
import { fetchMoviesByYearRange, fetchMoviesById } from "../apiService";

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
    // useEffect(() => {
    //     console.log("Exported Answers:", exportedAnswers);
    // }, []);

    const [backToHome, setBackToHome] = useState(false);
    // // Add new state to store movies data
    // const [movies, setMovies] = useState({});
    // const [initialRecommendations, setInitialRecommendations] = useState([]);
    // const [recommendations, setRecommendations] = useState([]);
    // const isAlreadyFetched = useRef(false);
    // const [movieDetailsFetched, setMovieDetailsFetched] = useState(false);

    // const [dataForApiCalls, setDataForApiCalls] = useState({});

    // // function copyMovieFields(data) {
    // //     const data = {data.original_language, data.original_title, data.overview, data.popularity, data.poster_path, data.release_date, data.vote_average};
    // //     return data;
    // // };

    // // New useEffect to fetch movies by year
    // useEffect(() => {
    //     if (!isAlreadyFetched.current) {
    //         isAlreadyFetched.current = true;
    //         async function getMovies() {
    //             try {
    //                 const data = await fetchMoviesByYearRange(exportedAnswers.year);
    //                 // Extract the desired fields from each movie in data.results
    //                 console.log("Movies by year range:", data);
    //                 if (data && data.results && Array.isArray(data.results)) {
    //                     const extractedDataArray = data.results.map(movie => ({
    //                         id: movie.id,
    //                         original_language: movie.original_language,
    //                         original_title: movie.original_title,
    //                         overview: movie.overview,
    //                         popularity: movie.popularity,
    //                         poster_path: movie.poster_path,
    //                         release_date: movie.release_date,
    //                         vote_average: movie.vote_average,
    //                         genres: []
    //                     }));

    //                     const extractedDataApiCalls = data.results.map(movie => ({
    //                         id: movie.id,
    //                         genres: movie.genre_ids
    //                     }));

    //                     setDataForApiCalls(extractedDataApiCalls);
    //                     console.log("ExtractedDataArray", extractedDataArray);
    //                     setInitialRecommendations(extractedDataArray);
    //                     setRecommendations(extractedDataArray);
    //                     // console.log("Recommendations:", recommendations);
    //                     // console.log("Data for API calls:", dataForApiCalls);

    //                     // console.log("Recommendations after API calls:", recommendations);
    //                 }
    //                 console.log("Fetched movies:", data);
    //                 setMovies(data);
    //             } catch (error) {
    //                 console.error("Error fetching movies:", error);
    //             }
    //         }
    //         getMovies();
    //     }
    // }, []);

    // useEffect(() => {
    //     // console.log("Recommendations after update:", recommendations);

    //     async function getMovieDetails() {
    //         if (recommendations && recommendations.length > 0 && !movieDetailsFetched) {
    //             const updatedRecommendations = [];
    //             for (const movie of recommendations) {
    //                 try {
    //                     const data = await fetchMoviesById(movie.id);
    //                     if (data) {
    //                         const extractedData = {
    //                             ...movie, // Spread the existing movie properties
    //                             budget: data.budget,
    //                             runtime: data.runtime,
    //                             genres: data.genres.map(genre => genre.name)
    //                         };
    //                         console.log("ExtractedData", extractedData);
    //                         updatedRecommendations.push(extractedData);
    //                     }
    //                 } catch (error) {
    //                     console.error("Error fetching movie details:", error);
    //                 }
    //             }
    //             setInitialRecommendations(updatedRecommendations);
    //             setRecommendations(updatedRecommendations);
    //             setMovieDetailsFetched(true); // Prevent re-fetching
    //         }
    //     }
    //     getMovieDetails();
    // }, [recommendations]);

    // useEffect(() => {
    //     console.log("Exported Answers Genres:", exportedAnswers.genre);
    //     if (initialRecommendations && initialRecommendations.length > 0 && exportedAnswers && exportedAnswers.genre && exportedAnswers.genre.length > 0) {
    //         const filteredRecommendations = initialRecommendations.filter(movie => {
    //             console.log("Movie genres:", movie.genres);
    //             console.log("Movie genres length:", movie.genres.length);
    //             if (movie.genres && movie.genres.length > 0) {
    //                 const shouldKeep = movie.genres.some(genre => {
    //                     const movieGenreLower = genre.toLowerCase();
    //                     const match = exportedAnswers.genre.some(selectedGenre => {
    //                         const selectedGenreLower = selectedGenre.toLowerCase();
    //                         console.log(`Comparing movie genre: ${movieGenreLower} with selected genre: ${selectedGenreLower}`);
    //                         return movieGenreLower === selectedGenreLower;
    //                     });
    //                     return match;
    //                 });
    //                 console.log(`Movie ${movie.original_title} should be kept: ${shouldKeep}`);
    //                 return shouldKeep;
    //             }
    //             console.log(`Movie ${movie.original_title} has no genres, excluding.`);
    //             return false; // If the movie has no genres, don't include it
    //         });
    //         setRecommendations(filteredRecommendations);
    //     }
    // }, [exportedAnswers.genre, initialRecommendations]);

    // useEffect(() => {
    //     console.log("Recommendations after filtering:", recommendations);
    // }, [recommendations]);

    useEffect(() => {
        async function getMovies() {
            try {
                const data = await fetchMoviesByYearRange("1975-01-01");
                // console.log("Movies from 1975-01-01:", data);

                // Convert the data to a JSON string
                const jsonString = JSON.stringify(data);
                // console.log("JSON String:", jsonString);
                // Store the JSON string in local storage
                localStorage.setItem('movie_knowledge_base', jsonString);

                console.log('Data saved to local storage');

            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        getMovies();
    }, []);

    useEffect(() => {

        if (onReachedEnd && backToHome) {
            onReachedEnd();
        }
    }, [backToHome]);


    return (
        < Container >
            <style>{special_button}</style>
            <h2>You could watch ...</h2>
            {/* {console.log("Exported Answers 2:", exportedAnswers)} */}
            {/* <pre>{JSON.stringify(recommendations, null, 2)}</pre> */}
            <Button onClick={() => setBackToHome(true)} id="special-button">Restart</Button>

        </Container >
    );
}

export default RecommendationComponent;