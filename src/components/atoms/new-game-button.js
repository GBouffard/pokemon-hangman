import React from 'react';
import Button from './button';
import PropTypes from 'prop-types';

const NewGameButton = ({ onClick }) =>
  <Button
    onClick={onClick}
    className="App__new-game-button"
    children="New Game" />;

NewGameButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewGameButton;