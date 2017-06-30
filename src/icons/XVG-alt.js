import React from 'react';
import PropTypes from 'prop-types';

const XvgAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      stroke={color}
      {...otherProps}
    >
      <path d="M113.417 0C50.779 0 0 50.779 0 113.417s50.779 113.417 113.417 113.417 113.417-50.779 113.417-113.417S176.055 0 113.417 0zM72.944 157.51L38.787 72.683 107.1 184.638 72.944 157.51zm36.916 17.574L41.548 63.128 84.942 99.52 70.406 67.409l27.312 22.906-12.361-23.773 24.503 20.549v87.993zm7.113-87.993l24.504-20.549-12.362 23.773 27.313-22.906-14.536 32.111 43.395-36.393-68.313 111.956V87.091zm36.918 70.419l-34.157 27.128 68.313-111.955-34.156 84.827z" />
    </svg>
  );
};

XvgAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XvgAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default XvgAlt;
