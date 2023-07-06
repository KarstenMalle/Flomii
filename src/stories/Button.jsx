import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { ReactComponent as PlusIcon } from './assets/icons/PlusIcon.svg';

export const Button = ({ type, withIcon, size, label, disabled, ...props }) => {
  return (
    <button
      type="button"
      className={`button button--${type} button--${size} ${withIcon ? 'button--with-icon' : ''}`}
      disabled={disabled}
      {...props}
    >
      {label}
      {withIcon && <PlusIcon alt="icon button" className="button-icon" />}
    </button>
  );
};


Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'danger']),
  withIcon: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  withIcon: false,
  size: 'medium',
  disabled: false,
  onClick: undefined,
};


