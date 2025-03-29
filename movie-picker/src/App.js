import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import WelcomeComponent from './components/WelcomeComponent';
import AboutComponent from './components/AboutComponent';
// import { fetchData } from './apiService';
import QuestionsComponent from './components/QuestionsComponent';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('Batman'); // Example search term

  const handleAboutClick = () => {
    if (showQuestions) {
      const confirmed = window.confirm("Are you sure you want to leave the questions? The progress will be lost.");

      if (confirmed) {
        setShowWelcome(false);
        setShowAbout(true);
        setShowQuestions(false);
      }
    }
    else {
      setShowWelcome(false);
      setShowAbout(true);
      setShowQuestions(false);
    }
  };

  const handleHomeClick = () => {
    if (showQuestions) {
      const confirmed = window.confirm("Are you sure you want to leave the questions? The progress will be lost.");

      if (confirmed) {
        setShowWelcome(true);
        setShowAbout(false);
        setShowQuestions(false);
      }
    }
    else {
      setShowWelcome(true);
      setShowAbout(false);
      setShowQuestions(false);
    }

  };

  const handleStartClick = () => {
    setShowWelcome(false);
    setShowAbout(false);
    setShowQuestions(true);
  };

  // useEffect(() => {
  //   // console.log("API Key:", process.env.REACT_APP_OMDb_API_KEY); // Check if API key is loaded
  //   // console.log("process.env:", process.env); // Log the entire process.env object
  //   const getMovies = async () => {
  //     try {
  //       const data = await fetchData(searchTerm);
  //       if (data.Search) {
  //         setMovies(data.Search);
  //       } else {
  //         setMovies([]);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch movies:", error);
  //     }
  //   };

  //   getMovies();
  // }, [searchTerm]); // useEffect will run when searchTerm changes

  return (
    <div className="App">
      <Header>
        <div className="logo-container">
          <div className="logo" >
            <img src='/logo.png' style={{ width: 60, height: 60 }} alt="Logo" />
          </div>
          <div className="logo-title">
            <h2 style={{ margin: 0 }}>Movie</h2>
            <h2 style={{ margin: 0 }}>Picker</h2>
          </div>
        </div>
        <div className="header-buttons">
          <Button onClick={handleHomeClick}>Home</Button>
          <Button onClick={handleAboutClick}>About</Button>
        </div>
      </Header >

      {showWelcome ? <WelcomeComponent onStartClick={handleStartClick} /> : null}
      {showAbout ? <AboutComponent /> : null}
      {showQuestions ? <QuestionsComponent /> : null}
    </div >
  );
}

export default App;
