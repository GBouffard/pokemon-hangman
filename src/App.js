import React, { Component } from "react";
import GameLogo from './components/atoms/game-logo';
import NumberOfLives from './components/atoms/number-of-lives';
import NameProgress from './components/atoms/name-progress';
import AlphabetButtons from './components/molecules/alphabet-buttons';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameLogo />
        <div>image placeholder</div>
        <NumberOfLives
          lives={6} />
        <NameProgress
          progress="_progress_" />
        <AlphabetButtons />
      </div>
    );
  }
}

export default App;
