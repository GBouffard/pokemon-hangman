import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
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
      <Provider store={store}>
        <div className="App">
          <GameLogo />
          <NumberOfLives />
          <StatusImage />
          <NameProgress />
          <AlphabetButtons />
          <NewGameButton />
        </div>
      </Provider>
    );
  }
}

export default App;
