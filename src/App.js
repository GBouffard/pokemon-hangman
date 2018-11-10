import React, { Component } from "react";
import GameLogo from './components/atoms/game-logo';
import StatusImage from './components/atoms/status-image';
import NumberOfLives from './components/atoms/number-of-lives';
import NameProgress from './components/atoms/name-progress';
import AlphabetButtons from './components/molecules/alphabet-buttons';
import NewGameButton from './components/atoms/new-game-button';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameLogo />
        <NumberOfLives
          lives={6} />
        <StatusImage
          status='playing' />
        <NameProgress
          progress="_progress_" />
        <AlphabetButtons />
        <NewGameButton
          onClick={() => { console.log('Will start a new game') }} />
      </div>
    );
  }
}

export default App;
