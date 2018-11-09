import pokemonList from "../constants/game-constants";
import _ from 'lodash';

const replaceLetter = (letter) => gameLogic.givenLetters.includes(letter) ? letter : '_'

const mappedGuess = (chosenName) => {
  const splitName = chosenName.split('');
  const mappedName = splitName.map(letter => replaceLetter(letter));
  const joinedName = mappedName.join().replace(/,/g, '');
  return joinedName;
};

const handleDuplicateChoice = (choices, letter) => {
  if (choices.includes(letter)) {
    throw new Error('This letter was already chosen!');
  }
}

const gameLogic = {
  lives: 6,
  givenLetters: [],

  guess: (chosenName) => mappedGuess(chosenName),

  choseRandomPokemonName: () => _.sample(pokemonList),

  isCorrect: (letter) => gameLogic.givenLetters.push(letter),

  isIncorrect: (letter) => {
    gameLogic.givenLetters.push(letter);
    gameLogic.lives--;
  },

  choseLetter: (chosenName, letter) => {
    handleDuplicateChoice(gameLogic.givenLetters, letter);
    chosenName.includes(letter) ? gameLogic.isCorrect(letter) : gameLogic.isIncorrect(letter);
  }
};

export default gameLogic;
