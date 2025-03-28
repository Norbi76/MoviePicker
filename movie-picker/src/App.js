import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import WelcomeComponent from './components/WelcomeComponent';
import AboutComponent from './components/AboutComponent';

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleHomeClick = () => {
    setShowAbout(false);
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
      {showAbout ? <AboutComponent /> : <WelcomeComponent />}
    </div >
  );
}

export default App;
