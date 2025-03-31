import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import WelcomeComponent from './components/WelcomeComponent';
import AboutComponent from './components/AboutComponent';
// import { fetchData } from './apiService';
import QuestionsComponent from './components/QuestionsComponent';
import RecommendationComponent from './components/RecommendationComponent';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showRecommendations, setShowRecommendations] = useState(false);

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
      <div className="content">
        {showWelcome ? <WelcomeComponent onStartClick={handleStartClick} /> : null}
        {showAbout ? <AboutComponent /> : null}
        {showQuestions ? (
          <QuestionsComponent onReachedEnd={() => { setShowQuestions(false); setShowRecommendations(true) }} />
        ) : null}
        {showRecommendations ? <RecommendationComponent /> : null}
        {/* <RecommendationComponent /> */}
      </div>

    </div >
  );
}

export default App;
