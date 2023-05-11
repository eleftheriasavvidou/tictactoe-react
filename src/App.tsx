import React from 'react';
import './App.css';
import { TicTacToe } from './tic-tac-toe/TicTacToe';
import TicTacLogo from './tic-tac-toe.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe React Challenge
        <img src={TicTacLogo} alt="Tic-Tac-Toe" />
      </header>
      <main>
        <TicTacToe/>
      </main>

    </div>
  );
}

export default App;
