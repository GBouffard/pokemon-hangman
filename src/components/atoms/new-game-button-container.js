import { connect } from "react-redux";
import NewGameButton from './new-game-button';
import {
  CHOSE_POKEMON_NAME
} from "../../redux/actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onClick: name => dispatch(CHOSE_POKEMON_NAME(name))
  };
};

export default connect(null, mapDispatchToProps)(NewGameButton);