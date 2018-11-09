import pokemonList from "../constants/game-constants";
import _ from 'lodash';

const mappedGuess = (chosenName) => chosenName.split('').map(letter => '_').join().replace(/,/g, '');

const gameLogic = {
  lives: 6,
  guessedLetters: [],

  guess: (chosenName) => mappedGuess(chosenName),

  choseRandomPokemonName: () => _.sample(pokemonList),

  isCorrect: (letter) => gameLogic.guessedLetters.push(letter),

  choseLetter: (chosenName, letter) => chosenName.includes(letter) ? gameLogic.isCorrect(letter) : null
};

export default gameLogic;
