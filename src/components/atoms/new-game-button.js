import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const NewGameButton = ({ onClick }) =>
  <Button
    onClick={onClick}
    className="App__new-game-button"
    children="New Game" />;

NewGameButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewGameButton;