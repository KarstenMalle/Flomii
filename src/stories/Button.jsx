import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ type, withIcon, size, label, disabled, iconSrc, ...props }) => {
  return (
    <button
      type="button"
      className={`button button--${type} button--${size} ${withIcon ? 'button--with-icon' : ''}`}
      disabled={disabled}
      {...props}
    >
      {label}
      {withIcon && <img src={iconSrc} alt="button icon" className="button-icon" />}
    </button>
  );
};


Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'danger']),
  withIcon: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  iconSrc: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  withIcon: false,
  size: 'medium',
  disabled: false,
  iconSrc: null,
  onClick: undefined,
};


