import pokemonList from "../constants/game-constants";
import _ from 'lodash';

const replaceLetter = (letter) => gameLogic.choices.includes(letter) ? letter : '_'

const mappedProgress = (chosenName) => {
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
  choices: [],

  visualProgress: (chosenName) => mappedProgress(chosenName),

  choseRandomPokemonName: () => _.sample(pokemonList),

  isCorrect: (letter) => gameLogic.choices.push(letter),

  isIncorrect: (letter) => {
    gameLogic.choices.push(letter);
    gameLogic.lives--;
  },

  choseLetter: (chosenName, letter) => {
    handleDuplicateChoice(gameLogic.choices, letter);
    chosenName.includes(letter) ? gameLogic.isCorrect(letter) : gameLogic.isIncorrect(letter);
  },

  reStart: () => {
    gameLogic.lives = 6;
    gameLogic.choices = [];
  },

  isGameOver: (chosenName) => chosenName === gameLogic.visualProgress(chosenName),

  result: (chosenName) => {
    if (gameLogic.isGameOver(chosenName)) { return 'You won!'; }
  }
};

export default gameLogic;
