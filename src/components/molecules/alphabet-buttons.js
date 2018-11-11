import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {
  CHOSE_LETTER
} from "../../redux/actions/actions";
import { alphabetLetters } from "../../constants/game-constants";
import Button from '../atoms/button';

const mapStateToProps = state => ({
  showAlphabet: state.showAlphabet
});

const mapDispatchToProps = dispatch => {
  return {
    onClick: letter => dispatch(CHOSE_LETTER(letter))
  };
};

const ConnectedButtons = ({ onClick }) => alphabetLetters.map(letter => (
  <Button
    className="App__alphabet-letter-button"
    key={letter}
    children={letter}
    onClick={() => onClick(letter)} />
));

ConnectedButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Buttons = connect(null, mapDispatchToProps)(ConnectedButtons);

const ConnectedAlphabetButtons = ({ showAlphabet }) => (
  <div className="App__alphabet-letter-container">
    {showAlphabet ? <Buttons /> : <div className="App__alphabet-letter-container--empty" />}
  </div>
);

ConnectedAlphabetButtons.propTypes = {
  showAlphabet: PropTypes.bool.isRequired
};

const AlphabetButtons = connect(mapStateToProps)(ConnectedAlphabetButtons);

export default AlphabetButtons;