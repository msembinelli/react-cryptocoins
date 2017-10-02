import React from 'react';
import PropTypes from 'prop-types';

const BatAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      width={size}
      height={size}
      fill={color}
      {...otherProps}
    >
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zM109 36.132v49.509l-25.956 45.306-42.977 24.754L109 36.132zM44.204 163l42.877-25h52.637l42.875 25H44.204zm99.151-32.053L117 85.643v-49.51l69.133 119.569-42.778-24.755z" />
    </svg>
  );
};

BatAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BatAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default BatAlt;
