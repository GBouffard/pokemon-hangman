import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { makeLives } from '../../utils/utils';

const NumberOfLives = ({ isPlaying, lives }) =>
  isPlaying && <Media query="(max-width: 640px)">
    {isMobile =>
      <div
        className={`App__lives ${isMobile ? "App__lives--mobile" : null}`}>
        {makeLives(lives)}
      </div>
    }
  </Media>;

NumberOfLives.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  lives: PropTypes.number.isRequired
};

export default NumberOfLives;