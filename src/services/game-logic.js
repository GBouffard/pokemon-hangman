import { pokemonList } from "../constants/game-constants";
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

  visualProgress: (name) => mappedProgress(name),

  choseRandomPokemonName: () => _.sample(pokemonList),

  isCorrect: (letter) => gameLogic.choices.push(letter),

  isIncorrect: (letter) => {
    gameLogic.choices.push(letter);
    gameLogic.lives--;
  },

  choseLetter: (name, letter) => {
    handleDuplicateChoice(gameLogic.choices, letter);
    name.includes(letter) ? gameLogic.isCorrect(letter) : gameLogic.isIncorrect(letter);
    return gameLogic.choices;
  },

  reStart: () => {
    gameLogic.lives = 6;
    gameLogic.choices = [];
  },

  isWon: (name) => name === gameLogic.visualProgress(name),

  isLost: (name) => gameLogic.lives === 0,

  isGameOver: (name) => gameLogic.isWon(name) || gameLogic.isLost(name)
};

export default gameLogic;
