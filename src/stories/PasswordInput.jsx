import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./passwordInput.css";

export const PasswordInput = ({
  helperText,
  label,
  stateInput,
  onStateChange,
  hasError,
  textLabelAbove,
  textLabelBelow,
  textLabelError,
  textPlaceholder,
}) => {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState(textPlaceholder);
  const [state, setState] = useState(stateInput);

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
    setPlaceholder(textPlaceholder);
  };

  return (
    <div className={`password`}>
      {label && <label className={`form-label ${state === 'disabled' ? 'disabled' : ''}`}>{textLabelAbove}</label>}

      <div className={`has-error-${hasError} state-${state}`}>
        <div className="input-wrapper">
          <input
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`input-field`}
            disabled={state === "disabled"}
            placeholder={placeholder}
          />
        </div>
      </div>

      {hasError && <label className={`form-error-text ${state === 'disabled' ? 'disabled' : ''}`}>{textLabelError}</label>}

      {!hasError && helperText && (
        <label className={`form-helper-text ${state === 'disabled' ? 'disabled' : ''}`}>{textLabelBelow}</label>
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  helperText: PropTypes.bool,
  label: PropTypes.bool,
  stateInput: PropTypes.oneOf(["disabled", "filled", "focus", "default"]),
  onStateChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  textLabelAbove: PropTypes.string,
  textLabelBelow: PropTypes.string,
  textLabelError: PropTypes.string,
  textPlaceholder: PropTypes.string,
};
