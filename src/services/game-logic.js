import pokemonList from "../constants/game-constants";
import _ from 'lodash';

const gameLogic = {
  choseRandomPokemonName: () => _.sample(pokemonList)
};

export default gameLogic;
