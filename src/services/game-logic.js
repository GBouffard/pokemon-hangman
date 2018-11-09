import pokemonList from "../constants/game-constants";
import _ from 'lodash';

const mappedGuess = (chosenName) => chosenName.split('').map(letter => '_').join().replace(/,/g, '');

const gameLogic = {
  lives: 6,
  guessedLetters: [],

  guess: (chosenName) => mappedGuess(chosenName),

  choseRandomPokemonName: () => _.sample(pokemonList),

  isCorrect: (chosenName, letter) => true,

  choseLetter: (chosenName, letter) => chosenName.includes(letter) ? gameLogic.isCorrect(chosenName, letter) : null
};

export default gameLogic;
