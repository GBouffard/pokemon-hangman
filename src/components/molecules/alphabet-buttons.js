import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons-container';

const AlphabetButtons = ({ isPlaying }) => (
  <div className="App__alphabet-letter-container">
    {isPlaying ? <Buttons /> : <div className="App__alphabet-letter-container--empty" />}
  </div>
);

AlphabetButtons.propTypes = {
  isPlaying: PropTypes.bool.isRequired
};

export default AlphabetButtons;