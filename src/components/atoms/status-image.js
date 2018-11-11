import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { statusImages } from "../../constants/game-constants";

const mapStateToProps = state => ({
  status: state.imageStatus
});

const ConnectedStatusImage = ({ status }) =>
  <img
    alt="status"
    className="App__status-image"
    src={`/images/${statusImages[status]}.png`} />;

const StatusImage = connect(mapStateToProps)(ConnectedStatusImage);

ConnectedStatusImage.propTypes = {
  status: PropTypes.string.isRequired
};

export default StatusImage;