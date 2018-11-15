import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';

const Button = (props) =>
  <Media query="(max-width: 640px)">
    {isMobile =>
      <button
        onClick={props.onClick}
        className={`${props.className} ${isMobile ? `${props.className}--mobile` : null}`}>
        {props.children}
      </button>
    }
  </Media>;

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};