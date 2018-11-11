import ACTIONS from "../../constants/action-types";

export const CHOSE_POKEMON_NAME = name => ({
  type: ACTIONS.CHOSE_POKEMON_NAME,
  payload: name
});

export const CHOSE_LETTER = letter => ({
  type: ACTIONS.CHOSE_LETTER,
  payload: letter
});