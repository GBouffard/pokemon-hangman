import React from 'react';
import PropTypes from 'prop-types';
import { statusImages } from "../../constants/game-constants";

const StatusImage = ({ status }) =>
  <img
    alt="status"
    className="App__status-image"
    src={`/images/${statusImages[status]}.png`} />;

export default StatusImage;

StatusImage.propTypes = {
  status: PropTypes.string.isRequired
};