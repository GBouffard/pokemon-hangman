import React from 'react';
import { alphabetLetters } from "../../constants/game-constants";
import Button from '../atoms/button';

const Buttons = () => alphabetLetters.map(letter => (
  <Button
    className="App__alphabet-letter-button"
    key={letter}
    children={letter}
    onClick={() => { console.log(letter); }} />
));

const AlphabetButtons = () => (
  <div className="App__alphabet-letter-container">
    <Buttons />
  </div>
);

export default AlphabetButtons;