import React from 'react';
import PropTypes from 'prop-types';

const NameProgress = ({ progress }) => (
  <div
    className="App__name-progress">
    {progress}
  </div>
);

NameProgress.propTypes = {
  progress: PropTypes.string.isRequired,
};

export default NameProgress;