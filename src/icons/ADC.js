import React from 'react';
import PropTypes from 'prop-types';

const Adc = props => {
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
        d="M113.4 38.4c-41.4 0-75 33.6-75 75s33.6 75 75 75 75-33.6 75-75-33.7-75-75-75zm35.9 82.4l-50.4 29.1c-4.4 2.5-9.8-.6-9.8-5.7V86c0-5 5.4-8.2 9.8-5.7l50.4 29.1c4.3 2.6 4.3 8.9 0 11.4z"
      />
      <path
        class="st0"
        d="M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4c62.6 0 113.4-50.8 113.4-113.4S176 0 113.4 0zm0 198.2c-46.8 0-84.8-38-84.8-84.8s38-84.8 84.8-84.8 84.8 38 84.8 84.8c0 46.7-38.1 84.8-84.8 84.8z"
      />
    </svg>
  );
};

Adc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Adc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Adc;
