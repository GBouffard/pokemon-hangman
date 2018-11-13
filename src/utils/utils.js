import React from 'react';

const makeLives = (numberOfLives) => {
  const lives = [];
  for (let i = 0; i < numberOfLives; i++) {
    lives.push(
      <span key={i}>
        <img src="images/heart.png" alt={`life-${i + 1}`} />
      </span>);
  }
  return lives;
}

export default makeLives;