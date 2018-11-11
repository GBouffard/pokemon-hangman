import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  lives: state.hearts
});

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

const ConnectedNumberOfLives = ({ lives }) => {
  return (
    <div className="App__lives">
      {makeLives(lives)}
    </div>
  );
};

const NumberOfLives = connect(mapStateToProps)(ConnectedNumberOfLives);

ConnectedNumberOfLives.propTypes = {
  lives: PropTypes.number.isRequired,
};

export default NumberOfLives;