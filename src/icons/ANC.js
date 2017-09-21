import React from 'react';
import PropTypes from 'prop-types';

const Anc = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      fill={color}
      {...otherProps}
    >
      <path d="M181.224 171.715H45.763l-12.218 22.179c20.493 20.325 48.7 32.884 79.843 32.884 31.201 0 59.456-12.604 79.958-32.996l-12.122-22.067zM113.388 0C50.765 0 0 50.767 0 113.389c0 22.61 6.621 43.674 18.026 61.362L113.388 0zm113.389 113.389C226.777 50.767 176.011 0 113.388 0l95.254 174.916c11.471-17.722 18.135-38.845 18.135-61.527zm-145.694-6.457h64.712L113.388 47.68zm-23.109 42.386h111.001l-10.93-19.989H68.871z" />
    </svg>
  );
};

Anc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Anc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Anc;
