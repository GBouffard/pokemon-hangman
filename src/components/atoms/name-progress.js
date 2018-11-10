import React from 'react';
import PropTypes from 'prop-types';

const NameProgress = ({ progress }) => (
  <div
    className="App__name-progress">
    {progress}
  </div>
);

export default NameProgress;

NameProgress.propTypes = {
  progress: PropTypes.string.isRequired,
};