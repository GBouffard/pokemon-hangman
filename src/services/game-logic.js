import pokemonList from "../constants/game-constants";
import _ from 'lodash';

const replaceLetter = (letter) => gameLogic.guessedLetters.includes(letter) ? letter : '_'

const mappedGuess = (chosenName) => {
  const splitName = chosenName.split('');
  const mappedName = splitName.map(letter => replaceLetter(letter));
  const joinedName = mappedName.join().replace(/,/g, '');
  return joinedName;
};

const gameLogic = {
  lives: 6,
  guessedLetters: [],

  guess: (chosenName) => mappedGuess(chosenName),

  choseRandomPokemonName: () => _.sample(pokemonList),

  isCorrect: (letter) => gameLogic.guessedLetters.push(letter),

  isIncorrect: (letter) => true,

  choseLetter: (chosenName, letter) => chosenName.includes(letter) ? gameLogic.isCorrect(letter) : gameLogic.isIncorrect(letter)
};

export default gameLogic;
