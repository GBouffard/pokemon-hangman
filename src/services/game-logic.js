import pokemonList from "../constants/game-constants";
import _ from 'lodash';

const gameLogic = {
  lives: 6,
  choseRandomPokemonName: () => _.sample(pokemonList)
};

export default gameLogic;
