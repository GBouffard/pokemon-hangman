import React from 'react';
import PropTypes from 'prop-types';
import { images } from "../../constants/game-constants";

const StatusImage = ({ status }) =>
  <img
    alt="status"
    className="App__status-image"
    src={images[status]} />;

StatusImage.propTypes = {
  status: PropTypes.string.isRequired
};

export default StatusImage;