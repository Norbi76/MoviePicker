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


    useEffect(() => {

        if (onReachedEnd && backToHome) {
            onReachedEnd();
        }
    }, [backToHome, onReachedEnd]);


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