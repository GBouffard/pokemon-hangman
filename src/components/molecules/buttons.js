import React from 'react';
import PropTypes from 'prop-types';
import { alphabetLetters } from "../../constants/game-constants";
import Button from '../atoms/button';

const Buttons = ({ onClick }) => alphabetLetters.map(letter => {
  const button = (
    <Button
      className="App__alphabet-letter-button"
      key={letter}
      children={letter}
      onClick={() => onClick(letter)} />
  );
  return button;
});

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Buttons;