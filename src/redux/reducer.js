import ACTIONS from "../constants/action-types";
import gameLogic from "../services/game-logic";

const initialState = {
  name: '',
  choices: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHOSE_POKEMON_NAME:
      return {
        ...state,
        name: [
          ...state.name,
          action.payload
        ]
      };
    case ACTIONS.CHOSE_LETTER:
      const choicesArray = gameLogic.choseLetter(state.name, action.payload);
      return {
        ...state,
        choices: choicesArray
      };
    default:
      return state;
  }
};

export default reducer;