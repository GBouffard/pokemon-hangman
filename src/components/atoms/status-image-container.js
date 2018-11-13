import { connect } from "react-redux";
import StatusImage from "./status-image";

const mapStateToProps = state => ({
  status: state.imageStatus
});

export default connect(mapStateToProps)(StatusImage);