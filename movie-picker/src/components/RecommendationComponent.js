import React, { useEffect } from "react";
import Container from "./Container";
import { exportedAnswers } from "./QuestionsComponent";

function RecommendationComponent() {
    // useEffect(() => {
    //     console.log("Exported Answers:", exportedAnswers);
    // }, []);
    return (
        <Container>
            <h2>You could watch ...</h2>
            {/* {console.log("Exported Answers 2:", exportedAnswers)} */}
        </Container>
    );
}

export default RecommendationComponent;