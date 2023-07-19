import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./searchField.css";
import { ReactComponent as SearchIcon } from "./assets/icons/search-md.svg";
import { ReactComponent as SearchXIcon } from "./assets/icons/search-x.svg";

export const SearchField = ({
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

  const clearInput = () => {
    console.log('Clear input function is triggered');
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
    setPlaceholder(textPlaceholder);
  };

  return (
    <div className={`search`}>
      {label && <label className="form-label">{textLabelAbove}</label>}

      <div className={`has-error-${hasError} state-${state}`}>
        <div className="input-wrapper">
          <SearchIcon className="search-icon" />
          <input
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`input-field ${
             value !== ""
                ? "has-close-icon"
                : ""
            }`}
            disabled={state === "disabled"}
            placeholder={placeholder}
          />
          {value !== "" && (
            <button onClick={clearInput} className="clear-button"> {}
              <SearchXIcon className="x-close" />
          </button>
          )}
        </div>
      </div>

      {hasError && <label className="form-error-text">{textLabelError}</label>}

      {!hasError && helperText && (
        <label className="form-helper-text">{textLabelBelow}</label>
      )}
    </div>
  );
};

SearchField.propTypes = {
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
