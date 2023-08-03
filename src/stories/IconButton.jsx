import React from "react";
import PropTypes from "prop-types";
import "./iconButton.css";

export const IconButton = ({ type, size, disabled, notification, notificationNum, icon: Icon, ...props }) => {
  return (
    <>
    <div>
    <button
      type="button"
      className={`icon-button icon-button--${type} icon-button--${size}`}
      disabled={disabled}
      {...props}
    >
      <Icon alt="icon button" className="button-icon" />
      
    </button>
    {notification && notificationNum >= 1 && notificationNum < 10 && <div className={`icon-button-notification--${size}`}><label className={`notification-label`}>{notificationNum}</label></div>}
    {notification && notificationNum >= 10 && <div className={`icon-button-notification--${size}`}><label className={`notification-label`}>9+</label></div>}
    </div>
    
  </>
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
  notification: PropTypes.bool,
  notificationNum: PropTypes.number,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  type: "primary",
  size: "medium",
  disabled: false,
  notification: false,
  notificationNum: 1,
  icon: () => {},
  onClick: undefined,
};