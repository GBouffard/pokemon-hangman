import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const NewGameButton = ({ isPlaying, onClick }) =>
  !isPlaying && <Button
    onClick={onClick}
    className="App__new-game-button"
    children="New Game" />;

NewGameButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default NewGameButton;