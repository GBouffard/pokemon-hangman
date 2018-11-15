import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import Buttons from './buttons-container';

const AlphabetButtons = ({ isPlaying }) =>
  <Media query="(max-width: 640px)">
    {isMobile =>
      <div className={`App__alphabet-letter-container ${isMobile ? "App__alphabet-letter-container--mobile" : null}`}>
        {isPlaying ? <Buttons /> : <div className="App__alphabet-letter-container--display-none" />}
      </div>
    }
  </Media>;

AlphabetButtons.propTypes = {
  isPlaying: PropTypes.bool.isRequired
};

export default AlphabetButtons;