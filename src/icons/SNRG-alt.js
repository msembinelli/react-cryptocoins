import React from 'react';
import PropTypes from 'prop-types';

const SnrgAlt = props => {
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
      <path
        class="st0"
        d="M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8c62.6 0 113.4-50.8 113.4-113.4C226.8 50.8 176 0 113.4 0zm60.2 149.6L114 188.4l-60.7-39.7v-22.3L114 166l46.5-30.2-15.2-9.9-31.9 21-17.5-11.4 49.2-31.9 28.5 18.3v27.7zm0-49.4l-60.7-39.6-46.6 30.2 15.2 9.9 31.9-21 17.5 11.4L81.7 123l-28.5-18.3V77.1l59.6-38.8L173.6 78v22.2z"
      />
    </svg>
  );
};

SnrgAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SnrgAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default SnrgAlt;
