import { connect } from "react-redux";
import NewGameButton from './new-game-button';
import {
  CHOSE_POKEMON_NAME
} from "../../redux/actions/actions";

const mapStateToProps = state => ({
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => ({
  onClick: name => dispatch(CHOSE_POKEMON_NAME(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButton);