import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { images } from "../../constants/game-constants";

const StatusImage = ({ status }) =>
  <Media query="(max-width: 640px)">
    {isMobile =>
      <img
        alt="status"
        className={isMobile ? "App__status-image--mobile" : null}
        src={images[status]} />
    }
  </Media>;

StatusImage.propTypes = {
  status: PropTypes.string.isRequired
};

export default StatusImage;