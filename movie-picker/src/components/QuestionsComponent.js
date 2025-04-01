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
    const [selected, setSelected] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const handleClick = (value) => {
        setSelected(value);
        setDisabled(true);
        onNext({ genre: value });
    };

    return (
        <>
            <style>{blinkAnimation}</style>
            <h2 style={{ margin: 0 }}>What genre would you like to watch?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Dramatic")}
                className={selected === "Dramatic" ? "blinking" : ""}
                disabled={disabled}
            >
                Dramatic (Action, Adventure, Drama)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Gentle")}
                className={selected === "Gentle" ? "blinking" : ""}
                disabled={disabled}
            >
                Gentle (Comedy, Family, Romance)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Curious")}
                className={selected === "Curious" ? "blinking" : ""}
                disabled={disabled}
            >
                Curious (History, Mystery)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Out of this world")}
                className={selected === "Out of this world" ? "blinking" : ""}
                disabled={disabled}
            >
                Out of this world (Fantasy, Science-finction)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Realistic")}
                className={selected === "Realistic" ? "blinking" : ""}
                disabled={disabled}
            >
                Realistic (Documentary)
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick("I don't care")}
                className={selected === "I don't care" ? "blinking" : ""}
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

    const handleClick = (value) => {
        setSelected(value);
        setDisabled(true);
        onNext({ year: value });
    };

    return (
        <>
            <style>{[blinkAnimation]}</style>
            <h2 style={{ margin: 0 }}>What year...?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("This year")}
                className={selected === "This year" ? "blinking" : ""}
                disabled={disabled}
            >
                This year
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Last 5 years")}
                className={selected === "Last 5 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 5 years
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Last 10 years")}
                className={selected === "Last 10 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 10 years
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Last 20 years")}
                className={selected === "Last 20 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 20 years
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Last 50 years")}
                className={selected === "Last 50 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 50 years
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Last 100 years")}
                className={selected === "Last 100 years" ? "blinking" : ""}
                disabled={disabled}
            >
                Last 100 years
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick("I reaaaally don't care")}
                className={selected === "I reaaaally don't care" ? "blinking" : ""}
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

    const handleClick = (value) => {
        setSelected(value);
        setDisabled(true);
        onNext({ time: value });
    };

    return (
        <>
            <style>{blinkAnimation}</style>
            <h2 style={{ margin: 0 }}>For how long...?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("A shorter film")}
                className={selected === "A shorter film" ? "blinking" : ""}
                disabled={disabled}
            >
                A shorter film (~90 minutes)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Average length")}
                className={selected === "Average length" ? "blinking" : ""}
                disabled={disabled}
            >
                Average length (1.5 to 2.5 hours)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("A long film")}
                className={selected === "A long film" ? "blinking" : ""}
                disabled={disabled}
            >
                A long film (2.5 hours)
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick("Time is relative")}
                className={selected === "Time is relative" ? "blinking" : ""}
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

    const handleClick = (value) => {
        setSelected(value);
        setDisabled(true);
        onNext({ popularity: value });
    };

    return (
        <>
            <style>{blinkAnimation}</style>
            <h2 style={{ margin: 0 }}>How popular?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Everybody heard of it")}
                className={selected === "Everybody heard of it" ? "blinking" : ""}
                disabled={disabled}
            >
                Everybody heard of it
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Nobody heard of it")}
                className={selected === "Nobody heard of it" ? "blinking" : ""}
                disabled={disabled}
            >
                Nobody heard of it
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick("Doesn't matter...")}
                className={selected === "Doesn't matter..." ? "blinking" : ""}
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

    const handleClick = (value) => {
        setSelected(value);
        setDisabled(true);
        onNext({ rating: value });
    };

    return (
        <>
            <style>{blinkAnimation}</style>
            <h2 style={{ margin: 0 }}>What about rating?</h2>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("Higly rated")}
                className={selected === "Higly rated" ? "blinking" : ""}
                disabled={disabled}
            >
                Higly rated(Over 7/10 rated)
            </Button>
            <Button
                style={{ width: "70%" }}
                onClick={() => handleClick("At least average")}
                className={selected === "At least average" ? "blinking" : ""}
                disabled={disabled}
            >
                At least average(Over 5/10 rated)
            </Button>
            <Button
                style={{ width: "70%" }}
                id="special-button"
                onClick={() => handleClick("I don't mind")}
                className={selected === "I don't mind" ? "blinking" : ""}
                disabled={disabled}
            >
                I don't mind
            </Button>
        </>
    );
}

// export const QuestionContext = createContext();

function QuestionsComponent({ onReachedEnd }) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showComponent, setShowComponent] = useState(true);
    const [delay] = useState(1000);
    // const [reachedEnd, setReachedEnd] = useState(false);
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
            // setReachedEnd(true);
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