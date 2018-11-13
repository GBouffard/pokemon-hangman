import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons-container';

const AlphabetButtons = ({ showAlphabet }) => (
  <div className="App__alphabet-letter-container">
    {showAlphabet ? <Buttons /> : <div className="App__alphabet-letter-container--empty" />}
  </div>
);

AlphabetButtons.propTypes = {
  showAlphabet: PropTypes.bool.isRequired
};

export default AlphabetButtons;