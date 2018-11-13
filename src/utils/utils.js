import React from 'react';
import { images } from "../constants/game-constants";

const makeLives = (numberOfLives) => {
  const lives = [];
  for (let i = 0; i < numberOfLives; i++) {
    lives.push(
      <span key={i}>
        <img src={images.heart} alt={`life-${i + 1}`} />
      </span>);
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