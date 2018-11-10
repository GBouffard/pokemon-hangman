import React from 'react';
import { alphabetLetters } from "../../constants/game-constants";
import Button from '../atoms/button';

const Buttons = () => alphabetLetters.map(letter => (
  <Button
    key={letter}
    children={letter}
    onClick={() => { console.log(letter); }} />
));

const AlphabetButtons = () => (
  <div>
    <Buttons />
  </div>
);

export default AlphabetButtons;