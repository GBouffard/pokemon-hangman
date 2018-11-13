import { connect } from "react-redux";
import AlphabetButtons from './alphabet-buttons';

const mapStateToProps = state => ({
  isPlaying: state.isPlaying
});

export default connect(mapStateToProps)(AlphabetButtons);