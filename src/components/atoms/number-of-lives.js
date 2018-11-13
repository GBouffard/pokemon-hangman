import React from 'react';
import PropTypes from 'prop-types';
import makeLives from '../../utils/utils';

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