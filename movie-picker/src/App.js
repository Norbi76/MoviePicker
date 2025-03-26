import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Header from './components/Header';
// import logoImage from '../public/logo.png';

function App() {
  return (
    <div className="App">
      <Header>
        <div className="logo-container">
          <div className="logo" >
            <img src='/logo.png' style={{ width: 60, height: 60 }} />
          </div>
          <div className="logo-title">
            <h2 style={{ margin: 0 }}>Movie</h2>
            <h2 style={{ margin: 0 }}>Picker</h2>
          </div>
        </div>
      </Header >
      {/* <Button onClick={() => alert('Hello, world!')}>Click me!</Button> */}
      < Container >
        <h1>Welcome to Movie Picker!</h1>
      </Container >
    </div >
  );
}

export default App;
