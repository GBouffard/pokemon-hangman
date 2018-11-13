import React from 'react';
import { images } from "../../constants/game-constants";

const GameLogo = () =>
  <img
    alt="Guillaume Pokemon Hangman logo"
    className="App__logo"
    src={images.logo} />;

export default GameLogo;