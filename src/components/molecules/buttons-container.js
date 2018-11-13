import { connect } from "react-redux";
import Buttons from './buttons';
import {
  CHOSE_LETTER
} from "../../redux/actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    onClick: letter => dispatch(CHOSE_LETTER(letter))
  };
};

export default connect(null, mapDispatchToProps)(Buttons);