import React from 'react';
import PropTypes from 'prop-types';
import './link.css';

export const Link = ({ href, size, label, onClick, ...props }) => {
  return (
    <a
      href={href}
      className={`link link--default link--${size}`}
      onClick={onClick}
      {...props}
    >
      <span className="text">{props.children}{label}</span>
    </a>
  );
};


Link.propTypes = {
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  size: 'large',
  onClick: null,
};
