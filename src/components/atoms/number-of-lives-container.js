import { connect } from "react-redux";
import NumberOfLives from './number-of-lives';

const mapStateToProps = state => ({
  lives: state.hearts,
  isPlaying: state.isPlaying
});

export default connect(mapStateToProps)(NumberOfLives);