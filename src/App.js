import React, { Component } from "react";
import GameLogo from './components/atoms/game-logo';
import StatusImage from './components/atoms/status-image';
import NumberOfLives from './components/atoms/number-of-lives';
import NameProgress from './components/atoms/name-progress';
import AlphabetButtons from './components/molecules/alphabet-buttons';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameLogo />
        <StatusImage
          status='playing' />
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
