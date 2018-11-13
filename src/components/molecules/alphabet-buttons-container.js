import { connect } from "react-redux";
import AlphabetButtons from './alphabet-buttons';

const mapStateToProps = state => ({
  showAlphabet: state.showAlphabet
});

export default connect(mapStateToProps)(AlphabetButtons);