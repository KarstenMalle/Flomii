import React from "react";
import PropTypes from "prop-types";
import "./iconButton.css";

export const IconButton = ({ type, size, disabled, icon: Icon, ...props }) => {
  return (
    <button
      type="button"
      className={`icon-button icon-button--${type} icon-button--${size}`}
      disabled={disabled}
      {...props}
    >
      <Icon alt="icon button" className="button-icon" />
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "ghost",
    "danger",
  ]),
  size: PropTypes.oneOf(["small", "medium"]),
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  type: "primary",
  size: "medium",
  disabled: false,
  icon: () => {},
  onClick: undefined,
};