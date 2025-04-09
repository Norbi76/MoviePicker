import React, { useEffect, useState } from "react";
import Container from "./Container";
import { exportedAnswers } from "./QuestionsComponent";
//exportedAnswers contains the input from the user
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

// used for testing ui, uncomment to use
//function fetchAndReturnJson(limit = 5) {
//    return fetch('/movies.json') // Fetch from the public directory
//        .then(response => {
//            if (!response.ok) {
//                throw new Error(`HTTP error! status: ${response.status}`);
//            }
//            return response.json();
//        })
//        .then(data => {
//            if (typeof data === "object" && !Array.isArray(data)) {
//                const entries = Object.entries(data); // Convert the dictionary to an array of key-value pairs
//                const limitedEntries = entries.slice(0, limit); // Get the first N key-value pairs
//                const limitedData = Object.fromEntries(limitedEntries); // Convert back to an object
//                console.log(`First ${limit} key-value pairs:`, limitedData);
//                return limitedData; // Return the limited data
//            } else {
//                console.warn("JSON data is not a dictionary. Full data:", data);
//                return null;
//            }
//        })
//        .catch(error => {
//            console.error("Error fetching JSON:", error);
//            return null;
//        });
//}

function RecommendationComponent({ onReachedEnd }) {
    const [backToHome, setBackToHome] = useState(false);
    const [recommendations, setRecommendationsData] = useState(null);
    const [currentRecommandtionIndex, setCurrentRecommandtionIndex] = useState(0);
    const posterPath = "https://image.tmdb.org/t/p/w200/";

    useEffect(() => {

        if (onReachedEnd && backToHome) {
            onReachedEnd();
        }
    }, [backToHome, onReachedEnd]);

    //used for testing ui, uncomment to use
    //useEffect(() => {
    //    fetchAndReturnJson().then(data => {
    //        if (data) {
    //            setRecommendationsData(data);
    //        }
    //    });
    //}, []);

    /*
        Add here code for inference
    */ 

    return (
        < Container >
            <style>{special_button}</style>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="movie_poster">
                    <img src={recommendations ? `${posterPath}${recommendations[currentRecommandtionIndex]["poster_path"]}` : null} alt="poster" />
                </div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: "100%", paddingRight: "50px", paddingLeft: "50px" }}>
                    <h2 style={{margin:"0", marginBottom:"15px"}}>{recommendations ? `${recommendations[currentRecommandtionIndex]["title"]}` : null}</h2>
                    <p style={{ margin: "0", marginBottom: "15px", fontSize:"12px"}}><strong>Movie description: </strong>{recommendations ? `${recommendations[currentRecommandtionIndex]["overview"]}` : null}</p>
                    <p style={{ margin: "0" }}><strong>Release date: </strong>{recommendations ? `${recommendations[currentRecommandtionIndex]["release_date"]}` : null}</p>
                    <p style={{ margin: "0" }}><strong>Runtime: </strong>{recommendations ? `${recommendations[currentRecommandtionIndex]["runtime"]}` : null} min</p>
                    <p style={{ margin: "0" }}><strong>Rating: </strong>{recommendations ? `${recommendations[currentRecommandtionIndex]["vote_average"]}` : null}/10</p>
                    <p style={{ margin: "0" }}><strong>Popularity: </strong>{recommendations ? `${recommendations[currentRecommandtionIndex]["popularity"]}` : null}</p>
                    <p style={{ margin: "0" }}><strong>Language: </strong>{recommendations ? `${recommendations[currentRecommandtionIndex]["original_language"]}` : null}</p>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                <Button onClick={() => {
                    setCurrentRecommandtionIndex(prevIndex => {
                        const numberOfEntries = recommendations ? Object.keys(recommendations).length : 0;
                        return (prevIndex + 1) % numberOfEntries; // Reset to 0 if it reaches the end
                    });
                }}
                >Try again</Button>
                <Button onClick={() => setBackToHome(true)} id="special-button">Restart(Go back to Home)</Button>
            </div>
        </Container >
    );
}


export default RecommendationComponent;