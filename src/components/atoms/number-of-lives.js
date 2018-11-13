import React from 'react';
import PropTypes from 'prop-types';

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

const NumberOfLives = ({ lives }) => {
  return (
    <div className="App__lives">
      {makeLives(lives)}
    </div>
  );
};

NumberOfLives.propTypes = {
  lives: PropTypes.number.isRequired,
};

export default NumberOfLives;