import React from 'react';
import PropTypes from 'prop-types';
import './iconButton.css';

export const IconButton = ({ type, size, disabled, iconSrc, ...props }) => {
  return (
    <button
      type="button"
      className={`icon-button icon-button--${type} icon-button--${size}`}
      disabled={disabled}
      {...props}
    >
      {<img src={iconSrc} alt="icon button" className="icon-button" />}
    </button>
  );
};


IconButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'danger']),
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  iconSrc: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  type: 'primary',
  size: 'medium',
  disabled: false,
  iconSrc: null,
  onClick: undefined,
};


