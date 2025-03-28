import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Header from './components/Header';

function App() {
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
          <Button>Home</Button>
          <Button>About</Button>
        </div>
      </Header >
      <Container>
        <h1 style={{ margin: 0 }}>Welcome to Movie Picker!</h1>
        <p>Answer some questions about what you like and we'll find the best movie for you!</p>
        <Button className="start-button" style={{ width: 250 }}>Start</Button>
      </Container>
    </div >
  );
}

export default App;
