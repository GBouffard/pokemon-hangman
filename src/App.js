import React, { Component } from "react";
import GameLogo from './components/atoms/game-logo';
import AlphabetButtons from './components/molecules/alphabet-buttons';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameLogo />
        <AlphabetButtons />
      </div>
    );
  }
}

export default App;
