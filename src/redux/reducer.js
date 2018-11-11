import ACTIONS from "../constants/action-types";
import gameLogic from "../services/game-logic";

const {
  choseRandomPokemonName,
  visualProgress,
  choseLetter
} = gameLogic;

const initialState = {
  name: '',
  choices: [],
  hearts: 6,
  nameProgress: 'CLICK NEW GAME'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHOSE_POKEMON_NAME:
      const chosenName = choseRandomPokemonName();
      const nameProgress = visualProgress(chosenName);
      return {
        ...state,
        name: chosenName,
        nameProgress
      };
    case ACTIONS.CHOSE_LETTER:
      const choicesArray = choseLetter(state.name, action.payload);
      const updateProgress = visualProgress(state.name);
      return {
        ...state,
        choices: choicesArray,
        hearts: gameLogic.lives,
        nameProgress: updateProgress
      };
    default:
      return state;
  }
};

export default reducer;