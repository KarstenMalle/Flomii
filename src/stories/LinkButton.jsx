import React from "react";
import PropTypes from "prop-types";
import "./linkButton.css";
import { ReactComponent as LeftIcon } from "./assets/icons/LeftArrowIcon.svg";
import { ReactComponent as RightIcon } from "./assets/icons/RightArrowIcon.svg";

export const LinkButton = ({
  type,
  size,
  label,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`link-button link-button--${type} link-button--${size}`}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <LeftIcon alt="left icon button" className="button-icon" />}
      {props.children}
      {label}
      {rightIcon && (
        <RightIcon alt="right icon button" className="button-icon" />
      )}
    </button>
  );
};

LinkButton.propTypes = {
  type: PropTypes.oneOf(["default", "neutral"]),
  size: PropTypes.oneOf(["small", "medium"]),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
  onClick: PropTypes.func,
};

LinkButton.defaultProps = {
  type: "default",
  size: "medium",
  disabled: false,
  leftIcon: false,
  rightIcon: false,
  onClick: undefined,
};
