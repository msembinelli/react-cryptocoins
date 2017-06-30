import React from 'react';
import PropTypes from 'prop-types';

const GemzAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M61.354 106.638H164.52L113.339 31.45zm51.75 100.725l51.982-93.719H60.621zM109.103 25.26H66.04c0 .109.013.214.003.324L59.398 97.15l49.705-71.89zm8.495 0l48.842 71.749-6.449-71.433c-.009-.107.005-.209.005-.315h-42.398zm55.803 87.98l-51.038 92.082 102.217-103.04zm-121.848-7.363l7.486-80.617h-4.365L-.096 94.63zm-49.545-3.619l101.933 103.027-51.562-92.058zm172.267 3.631l52.507-11.242-55.64-69.387h-4.146z" />
    </svg>
  );
};

GemzAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GemzAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default GemzAlt;
