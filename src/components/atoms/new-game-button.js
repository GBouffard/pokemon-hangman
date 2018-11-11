import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Button from './button';
import {
  CHOSE_POKEMON_NAME
} from "../../redux/actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onClick: name => dispatch(CHOSE_POKEMON_NAME(name))
  };
};

const ConnectedNewGameButton = ({ onClick }) =>
  <Button
    onClick={onClick}
    className="App__new-game-button"
    children="New Game" />;

ConnectedNewGameButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

const NewGameButton = connect(null, mapDispatchToProps)(ConnectedNewGameButton);

export default NewGameButton;