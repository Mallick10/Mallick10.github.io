import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovies from "./searchMovie";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Movie Buff
      </header>
      <body className="App-body">
        
        <SearchMovies/>
      </body>

    </div>
  );
}

export default App;
