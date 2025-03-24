import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Movie Picker!</h1>
        <p>Find the perfect movie for your next movie night.</p>
        <Button onClick={handleClick}>Find Movies</Button>
      </header>
    </div>
  );
}

export default App;
