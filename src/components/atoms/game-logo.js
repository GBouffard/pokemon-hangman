import React from 'react';
import Media from 'react-media';
import { images } from "../../constants/game-constants";

const GameLogo = () =>
  <Media query="(max-width: 640px)">
    {isMobile =>
      <img
        alt="Guillaume Pokemon Hangman logo"
        className={`App__logo ${isMobile ? "App__logo--mobile" : null}`}
        src={images.logo} />
    }
  </Media>;

export default GameLogo;