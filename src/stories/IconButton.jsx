import React from 'react';
import PropTypes from 'prop-types';
import './iconButton.css';
import { ReactComponent as PlusIcon } from './assets/icons/PlusIcon.svg';


export const IconButton = ({ type, size, disabled, ...props }) => {
  return (
    <button
      type="button"
      className={`icon-button icon-button--${type} icon-button--${size}`}
      disabled={disabled}
      {...props}
    >
      {<PlusIcon alt="icon button" className="button-icon" />}
    </button>
  );
};


IconButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'danger']),
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  type: 'primary',
  size: 'medium',
  disabled: false,
  onClick: undefined,
};


