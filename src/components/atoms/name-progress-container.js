import { connect } from "react-redux";
import NameProgress from './name-progress';

const mapStateToProps = state => ({
  progress: state.nameProgress
});

export default connect(mapStateToProps)(NameProgress);