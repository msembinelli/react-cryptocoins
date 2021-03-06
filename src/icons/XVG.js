import React from 'react';
import PropTypes from 'prop-types';

const Xvg = props => {
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
      <path d="M89.428 62.451L47.981 27.69 70.04 76.42 4.189 21.193l103.664 169.892V57.558L70.668 26.375zM51.832 164.417l51.832 41.167L0 35.693zM156.459 76.42l22.06-48.73-41.449 34.761 18.761-36.076-37.185 31.183v133.527L222.309 21.193zM174.668 164.417l51.831-128.724-103.662 169.891z" />
    </svg>
  );
};

Xvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Xvg.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Xvg;
