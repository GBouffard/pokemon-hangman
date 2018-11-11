import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  progress: state.nameProgress
});

const ConnectedNameProgress = ({ progress }) => (
  <div
    className="App__name-progress">
    {progress}
  </div>
);

const NameProgress = connect(mapStateToProps)(ConnectedNameProgress);

ConnectedNameProgress.propTypes = {
  progress: PropTypes.string.isRequired,
};

export default NameProgress;