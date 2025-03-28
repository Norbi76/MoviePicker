import React from 'react';
import { useState, useEffect } from "react";
import Container from './Container';

function AboutComponent() {
    const [titleStyle, setTitleStyle] = useState({ opacity: 0 });
    const [textStyle, setTextStyle] = useState({ opacity: 0 });

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setTitleStyle({ opacity: 1, transition: "opacity 1s ease-in" });
        }, 0);

        const timeout2 = setTimeout(() => {
            setTextStyle({ opacity: 1, transition: "opacity 1s ease-in" });
        }, 300);

        return () => { clearTimeout(timeout1); clearTimeout(timeout2); }
    }, []);

    return (
        <Container>
            <h1 style={titleStyle}>About</h1>
            <p style={textStyle}>Welcome to Movie Picker 🍿, your ultimate movie selection companion!
                Built with React and powered by the OMDb API, our platform helps you discover movies effortlessly.
                Whether you're looking for timeless classics or the latest blockbusters, we provide detailed movie information and personalized suggestions to make your movie-picking experience a breeze.
                Let us guide you to your next cinematic adventure!</p>
        </Container>
    );
}

export default AboutComponent;
