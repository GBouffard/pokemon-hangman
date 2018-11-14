import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

const NameProgress = ({ progress }) => (
  <Media query="(max-width: 640px)">
    {isMobile =>
      <div
        className={`App__name-progress ${isMobile ? "App__name-progress--mobile" : null}`}>
        {progress}
      </div>
    }
  </Media>
);

NameProgress.propTypes = {
  progress: PropTypes.string.isRequired,
};

export default NameProgress;