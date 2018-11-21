import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { images } from "./constants/game-constants";
import GameLogo from './components/atoms/game-logo';
import StatusImage from './components/atoms/status-image-container';
import NumberOfLives from './components/atoms/number-of-lives-container';
import NameProgress from './components/atoms/name-progress-container';
import AlphabetButtons from './components/molecules/alphabet-buttons-container';
import NewGameButton from './components/atoms/new-game-button-container';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div
          style={{ background: `url(${images.background})` }}
          className="App">
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
