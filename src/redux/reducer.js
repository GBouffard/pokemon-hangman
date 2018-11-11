import ACTIONS from "../constants/action-types";
import gameLogic from "../services/game-logic";

const {
  choseRandomPokemonName,
  choseLetter
} = gameLogic;

const initialState = {
  name: '',
  choices: [],
  hearts: 6
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHOSE_POKEMON_NAME:
      const chosenName = choseRandomPokemonName();
      return {
        ...state,
        name: chosenName
      };
    case ACTIONS.CHOSE_LETTER:
      const choicesArray = choseLetter(state.name, action.payload);
      return {
        ...state,
        choices: choicesArray,
        hearts: gameLogic.lives
      };
    default:
      return state;
  }
};

export default reducer;