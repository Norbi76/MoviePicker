import React, { useState, useEffect } from 'react';
import Container from './Container';
import Button from './Button';

export let exportedAnswers = {};

const blinkAnimation = `
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  .blinking {
    animation: blinker 1s linear infinite;
  }
`;

function Genre({ onNext }) {
    // const [selected, setSelected] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [active, setActive] = useState(null);

    const dramaticGenres = ["Action", "Adventure", "Drama"];
    const gentleGenres = ["Comedy", "Family", "Romance"];
    const curiousGenres = ["History", "Mystery"];
    const outOfThisWorldGenres = ["Fantasy", "Science-fiction"];
    const realisticGenres = ["Documentary"];
    const allGenres = [];

    const handleClick = (value, buttonId) => {
        setActive(buttonId);
        // setSelected(value);
        setDisabled(true);
        onNext({ genre: value });
    };

    return (
        <>
            <style>{blinkAnimation}</style>
            <h2 style={{ margin: 0 }}>What genre would you like to watch?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(dramaticGenres, "Dramatic")}
                className={active === "Dramatic" ? "blinking" : ""}
                disabled={disabled}
            >
                Dramatic (Action, Adventure, Drama)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(gentleGenres, "Gentle")}
                className={active === "Gentle" ? "blinking" : ""}
                disabled={disabled}
            >
                Gentle (Comedy, Family, Romance)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(curiousGenres, "Curious")}
                className={active === "Curious" ? "blinking" : ""}
                disabled={disabled}
            >
                Curious (History, Mystery)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(outOfThisWorldGenres, "Out of this world")}
                className={active === "Out of this world" ? "blinking" : ""}
                disabled={disabled}
            >
                Out of this world (Fantasy, Science-finction)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(realisticGenres, "Realistic")}
                className={active === "Realistic" ? "blinking" : ""}
                disabled={disabled}
            >
                Realistic (Documentary)
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick(allGenres, "I don't care")}
                className={active === "I don't care" ? "blinking" : ""}
                disabled={disabled}
            >
                I don't care
            </Button>
        </>
    );
}

function Year({ onNext }) {
    const [selected, setSelected] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [active, setActive] = useState(null);

    const handleClick = (value, buttonId) => {
        setActive(buttonId);
        setSelected(value);
        setDisabled(true);
        onNext({ year: value });
    };

    const thisYear = new Date().getFullYear();
    const last5Years = thisYear - 5;
    const last10Years = thisYear - 10;
    const last20Years = thisYear - 20;
    const last50Years = thisYear - 50;
    const last100Years = thisYear - 100;

    return (
        <>
            <style>{blinkAnimation}</style>
            <h2 style={{ margin: 0 }}>What year...?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(thisYear, "This year")}
                className={active === "This year" ? "blinking" : ""}
                disabled={disabled}
            >
                This year
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(last5Years, "Last 5 years")}
                className={active === "Last 5 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 5 years
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(last10Years, "Last 10 years")}
                className={active === "Last 10 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 10 years
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(last20Years, "Last 20 years")}
                className={active === "Last 20 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 20 years
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(last50Years, "Last 50 years")}
                className={active === "Last 50 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 50 years
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(last100Years, "Last 100 years")}
                className={active === "Last 100 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 100 years
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick(last100Years, "I reaaaally don't care")}
                className={active === "I reaaaally don't care" ? "blinking" : ""}
                disabled={disabled}
            >
                I reaaaally don't care
            </Button>
        </>
    );
}

function Time({ onNext }) {
    const [selected, setSelected] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [active, setActive] = useState(null);

    const handleClick = (value, buttonId) => {
        setActive(buttonId);
        setSelected(value);
        setDisabled(true);
        onNext({ time: value });
    };

    const shortFilm = [0, 90];
    const averageFilm = [90, 150];
    const longFilm = [150, 0];
    const allLenghts = [0, 0];

    return (
        <>
            <style>{blinkAnimation}</style>
            <h2 style={{ margin: 0 }}>For how long...?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(shortFilm, "A shorter film")}
                className={active === "A shorter film" ? "blinking" : ""}
                disabled={disabled}
            >
                A shorter film (~90 minutes)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(averageFilm, "Average length")}
                className={active === "Average length" ? "blinking" : ""}
                disabled={disabled}
            >
                Average length (1.5 to 2.5 hours)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(longFilm, "A long film")}
                className={active === "A long film" ? "blinking" : ""}
                disabled={disabled}
            >
                A long film (2.5 hours)
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick("allLenghts", "Time is relative")}
                className={active === "Time is relative" ? "blinking" : ""}
                disabled={disabled}
            >
                Time is relative
            </Button>
        </>
    );
}

function Popularity({ onNext }) {
    const [selected, setSelected] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [active, setActive] = useState(null);

    const handleClick = (value, buttonId) => {
        setActive(buttonId);
        setSelected(value);
        setDisabled(true);
        onNext({ popularity: value });
    };

    const highPopularity = 7;
    const averagePopularity = 5;
    const allGrades = 0;

    return (
        <>
            <style>{blinkAnimation}</style>
            <h2 style={{ margin: 0 }}>How popular?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(highPopularity, "Everybody heard of it")}
                className={active === "Everybody heard of it" ? "blinking" : ""}
                disabled={disabled}
            >
                Everybody heard of it (7/10)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(averagePopularity, "Average")}
                className={active === "Average" ? "blinking" : ""}
                disabled={disabled}
            >
                Nobody heard of it (5/10)
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick(allGrades, "Doesn't matter...")}
                className={active === "Doesn't matter..." ? "blinking" : ""}
                disabled={disabled}
            >
                Doesn't matter...
            </Button>
        </>
    );
}

function Rating({ onNext }) {
    const [selected, setSelected] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [active, setActive] = useState(null);

    const handleClick = (value, buttonId) => {
        setActive(buttonId);
        setSelected(value);
        setDisabled(true);
        onNext({ rating: value });
    };

    const highRating = 7;
    const averageRating = 5;
    const allRatings = 0;

    return (
        <>
            <style>{blinkAnimation}</style>
            <h2 style={{ margin: 0 }}>What about rating?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(highRating, "Higly rated")}
                className={active === "Higly rated" ? "blinking" : ""}
                disabled={disabled}
            >
                Higly rated(Over 7/10 rated)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick(averageRating, "At least average")}
                className={active === "At least average" ? "blinking" : ""}
                disabled={disabled}
            >
                At least average(Over 5/10 rated)
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick(allRatings, "I don't mind")}
                className={active === "I don't mind" ? "blinking" : ""}
                disabled={disabled}
            >
                I don't mind
            </Button>
        </>
    );
}

function QuestionsComponent({ onReachedEnd }) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showComponent, setShowComponent] = useState(true);
    const [delay] = useState(1000);
    const questions = [Genre, Year, Time, Popularity, Rating];

    const handleNext = (newAnswer) => {
        setAnswers(prevAnswers => ({ ...prevAnswers, ...newAnswer }));

        setTimeout(() => {
            setQuestionIndex(prevIndex => prevIndex + 1);
            setShowComponent(true);
        }, delay);
    };

    useEffect(() => {
        exportedAnswers = answers;
    }, [answers]);

    useEffect(() => {
        if (questionIndex === questions.length) {
            console.log("All questions answered:", answers);
            alert(JSON.stringify(answers));
            if (onReachedEnd) {
                onReachedEnd();
            }
        }
    }, [questionIndex, answers, questions.length, onReachedEnd]);

    const CurrentQuestion = questions[questionIndex];

    return (
        <Container>
            {showComponent && CurrentQuestion && <CurrentQuestion onNext={handleNext} />}
        </Container>
    );
}

export default QuestionsComponent;