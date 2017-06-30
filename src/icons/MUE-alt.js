import React from 'react';
import PropTypes from 'prop-types';

const MueAlt = props => {
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
      <path d="M184.741 34.274l-70.057 88.04-71.868-88.04L0 214.203h42.816l22.612-93.815 49.256 58.214 48.408-58.214 22.611 93.815h41.374z" />
      <path d="M104.276 71.558c11.908 0 22.552-17.68 37.526-29.227 14.974-11.546 42.037-27.241 40.412-29.587-1.624-2.346-37.887 20.387-46.186 27.242-8.298 6.855-21.288 19.846-26.339 19.124-5.052-.722-31.752-42.396-40.773-36.804-4.26 2.641-4.33 8.24-1.263 11.968 3.067 3.728 24.717 37.284 36.623 37.284z" />
    </svg>
  );
};

MueAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MueAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default MueAlt;
