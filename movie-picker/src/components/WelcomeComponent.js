import React from 'react';
import Button from './Button';
import Container from './Container';
import { useState, useEffect } from "react";


function WelcomeContent() {
    const [titleStyle, setTitleStyle] = useState({ opacity: 0 });
    const [textStyle, setTextStyle] = useState({ opacity: 0 });
    const [buttonStyle, setButtonStyle] = useState({ opacity: 0 });

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setTitleStyle({ opacity: 1, transition: "opacity 1s ease-in" });
        }, 200);

        const timeout2 = setTimeout(() => {
            setTextStyle({ opacity: 1, transition: "opacity 1s ease-in" });
        }, 500);

        const timeout3 = setTimeout(() => {
            setButtonStyle({ opacity: 1, transition: "opacity 1s ease-in" });
        }, 800);

        return () => { clearTimeout(timeout1); clearTimeout(timeout2); clearTimeout(timeout3); }
    }, []);


    return (
        <Container>
            <h1 style={{ ...titleStyle, margin: 0 }}>Welcome to Movie Picker!</h1>
            <p style={textStyle}>Answer some questions about what you like and we'll find the best movie for you!</p>
            <Button className="start-button" style={{ ...buttonStyle, width: 250 }}>Start</Button>
        </Container>
    );
}

export default WelcomeContent;
