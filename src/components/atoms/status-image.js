import React from 'react';
import PropTypes from 'prop-types';
import { statusImages } from "../../constants/game-constants";

const StatusImage = ({ status }) =>
  <img
    alt="status"
    className="App__status-image"
    src={`/images/${statusImages[status]}.png`} />;

StatusImage.propTypes = {
  status: PropTypes.string.isRequired
};

export default StatusImage;