import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./searchInput.css";

export const SearchInput = ({
  label,
  labelBool,
  helper,
  helperBool,
  error,
  errorBool,
  stateInput,
  startIcon: StartIcon,
  endIcon: EndIcon,
  onStateChange,
  placeholderInput,
}) => {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState(placeholderInput);
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

  const clearInput = () => {
    setValue("");
    onStateChange?.("default");
    setState("default");
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
      <div className={`search`}>
          {labelBool && <label className={`form-label`}>{label}</label>}
          <div className={`state-${state} has-error-${errorBool}`}>
            <div className={`input-search`}>
              <StartIcon className="start-icon" />
              <input
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`text`}
                disabled={state === "disabled"}
                placeholder={placeholder}
              />
              {value !== "" && (
                <button onClick={clearInput} className="clear-button-shown">
                  {" "}
                  {}
                  <EndIcon className="end-icon" />
                </button>
              )}


            </div>
          </div>
          {helperBool && !errorBool && (
            <label className={`form-helper`}>{helper}</label>
          )}
          {errorBool && !helperBool && (
            <label className={`form-error`}>{error}</label>
          )}
        </div>
  );
};

SearchInput.propTypes = {
  label: PropTypes.string,
  labelBool: PropTypes.bool,
  helper: PropTypes.string,
  helperBool: PropTypes.bool,
  error: PropTypes.string,
  errorBool: PropTypes.bool,
  stateInput: PropTypes.oneOf(["disabled", "filled", "focus", "default"]),
  startIcon: PropTypes.elementType,
  endIcon: PropTypes.elementType,
  placeholderInput: PropTypes.string,
};
