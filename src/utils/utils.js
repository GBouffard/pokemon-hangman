import React from 'react';
import Media from 'react-media';
import { images } from "../constants/game-constants";

const makeLives = (numberOfLives) => {
  const lives = [];
  for (let i = 0; i < numberOfLives; i++) {
    lives.push(
      <Media query="(max-width: 640px)">
        {isMobile =>
          <span key={i}>
            <img src={images.heart} alt={`life-${i + 1}`}
              className={`App__heart ${isMobile ? 'App__heart--mobile' : null}`} />
          </span>
        }
      </Media>);
  }
  return lives;
}

const updateImageStatus = (isWon, isLost) => {
  if (isWon) return 'won';
  if (isLost) return 'lost';
  return 'playing';
};

export {
  makeLives,
  updateImageStatus
};