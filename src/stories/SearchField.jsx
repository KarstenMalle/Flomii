import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './searchField.css';
import { ReactComponent as SearchIcon } from './assets/icons/search-md.svg'
import { ReactComponent as SearchXIcon } from './assets/icons/search-x.svg'

export const SearchField = ({ helperText, label, state, onStateChange, hasError, className, textLabelAbove, textLabelBelow, textLabelError }) => {
  const [value, setValue] = useState('');
  const [placeholder, setPlaceholder] = useState("Search");

  const handleInputChange = (event) => {
    setValue(event.target.value);
    if (event.target.value) {
      onStateChange('filled');
    } else {
      onStateChange('default');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      onStateChange('filled');
    }
  };

  const clearInput = () => {
    setValue('');
    onStateChange('default');
  };

  const handleFocus = () => {
    setPlaceholder("");
  };
  
  const handleBlur = () => {
    if (value === '') setPlaceholder("Search");
  };

  const inputClass = hasError ? 'class' : 'class-2';
  const divClass = `div has-error-${hasError} state-${state}`;

  return (
    <div className={`search ${state} ${className}`}>
      {label && <label className='form-label'>{textLabelAbove}</label>}

      <div className={divClass}>
        <SearchIcon className="search-icon" />
        <input 
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={inputClass} 
          disabled={state === "disabled"} 
          placeholder={placeholder} 
        />
        {(state === 'filled' || state === 'focus') && <SearchXIcon className="x-close" onClick={clearInput} />}
      </div>

      {hasError && (
        <div className="form-error-text">
          <div className="help-text-i">{textLabelError}</div>
        </div>
      )}

      {!hasError && helperText && <label className='form-helper-text'>{textLabelBelow}</label>}
    </div>
  );
};

SearchField.propTypes = {
  helperText: PropTypes.bool,
  label: PropTypes.bool,
  state: PropTypes.oneOf(['disabled', 'filled', 'focus', 'default']),
  onStateChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  className: PropTypes.string,
  textLabelAbove: PropTypes.string, 
  textLabelBelow: PropTypes.string, 
  textLabelError: PropTypes.string,
};
