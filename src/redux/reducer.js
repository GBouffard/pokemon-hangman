import ACTIONS from "../constants/action-types";
import gameLogic from "../services/game-logic";
import { newImageStatus } from '../../src/utils/utils'

const {
  lives,
  choices,
  choseRandomPokemonName,
  visualProgress,
  choseLetter,
  isWon,
  isLost,
  reStart
} = gameLogic;

const initialState = {
  name: '',
  choices,
  hearts: lives,
  nameProgress: 'CLICK NEW GAME',
  imageStatus: 'playing',
  isPlaying: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ACTIONS.CHOSE_POKEMON_NAME:
      reStart();
      const chosenName = choseRandomPokemonName();
      const nameProgress = visualProgress(chosenName);
      return {
        ...initialState,
        name: chosenName,
        nameProgress,
        isPlaying: true
      };

    case ACTIONS.CHOSE_LETTER:
      const choicesArray = choseLetter(state.name, action.payload);
      const isGameWon = isWon(state.name);
      const isGameLost = isLost(state.name);
      const updateProgress = isGameLost ? state.name : visualProgress(state.name);
      const isPlaying = !isGameWon && !isGameLost;

      return {
        ...state,
        choices: choicesArray,
        hearts: gameLogic.lives,
        nameProgress: updateProgress,
        imageStatus: newImageStatus(isGameWon, isGameLost),
        isPlaying
      };
    default:
      return state;
  }
};

export default reducer;