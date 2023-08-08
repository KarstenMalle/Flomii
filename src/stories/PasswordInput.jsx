import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./passwordInput.css";

export const PasswordInput = ({
  label,
  labelBool,
  helper,
  helperBool,
  error,
  errorBool,
  stateInput,
  statePwInput,
  showIcon: ShowIcon,
  hideIcon: HideIcon,
  onStateChange,
  placeholderInput,
}) => {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState(placeholderInput);
  const [state, setState] = useState(stateInput);
  const [statePw, setStatePw] = useState(statePwInput)

  useEffect(() => {
    setState(stateInput);
  }, [stateInput]);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      onStateChange?.("filled");
      setState("filled");
      setTimeout(() => event.target.blur(), 0);
    }
  };

  const toggleInput = () => {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
      onStateChange?.("shown");
      setStatePw("shown");
    } else {
      x.type = "password";
      onStateChange?.("hidden");
      setStatePw("hidden");
    }
  };

  const handleFocus = () => {
    setPlaceholder("");
    onStateChange?.("focus");
    setState("focus");
  };

  const handleBlur = () => {
    if (state === "focus") {
      onStateChange?.("default");
      setState("default");
    }
    setPlaceholder(placeholderInput);
  };

  return (
    <div className={`password`}>
      {labelBool && state !== "disabled" && (
        <label className={`form-label`}>{label}</label>
      )}
      {labelBool && state === "disabled" && (
        <label className={`form-label-disabled`}>{label}</label>
      )}
      <div className={`state-${state} has-error-${errorBool}`}>
        <div className={`input-password`}>
          <input
            type="password"
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`text`}
            disabled={state === "disabled"}
            placeholder={placeholder}
            id="passwordInput"
          />
          <button onClick={toggleInput} className="eye-button">
            {" "}
            {}
            {statePw === "shown" && <ShowIcon className="password-show-icon" />}
            {statePw === "hidden" && <HideIcon className="password-hide-icon" />}
          </button>
        </div>
      </div>
      {helperBool && !errorBool && state !== "disabled" && (
        <label className={`form-helper`}>{helper}</label>
      )}
      {helperBool && !errorBool && state === "disabled" && (
        <label className={`form-helper-disabled`}>{helper}</label>
      )}
      {errorBool && !helperBool && state !== "disabled" && (
        <label className={`form-error`}>{error}</label>
      )}
      {errorBool && !helperBool && state === "disabled" && (
        <label className={`form-error-disabled`}>{error}</label>
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  labelBool: PropTypes.bool,
  helper: PropTypes.string,
  helperBool: PropTypes.bool,
  error: PropTypes.string,
  errorBool: PropTypes.bool,
  stateInput: PropTypes.oneOf(["disabled", "filled", "focus", "default"]),
  statePwInput: PropTypes.oneOf(["shown", "hidden"]),
  showicon: PropTypes.elementType,
  hideicon: PropTypes.elementType,
  placeholderInput: PropTypes.string,
};
