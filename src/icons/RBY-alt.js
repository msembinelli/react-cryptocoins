import React from 'react';
import PropTypes from 'prop-types';

const RbyAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M139.519 102.232c0-17.341-14.73-21.445-24.054-21.445H86.096v11.934h27.876c7.085 0 10.256 4.755 10.256 9.976 0 5.222-2.517 9.603-9.51 9.603H86.095v12.773h24.427l14.638 20.793h18.087l-16.782-22.843c.002 0 13.054-3.449 13.054-20.791z" />
      <path d="M113.327 0C50.738 0 0 50.738 0 113.327s50.738 113.327 113.327 113.327 113.326-50.738 113.326-113.327S175.916 0 113.327 0zm-4.947 37.519a75.768 75.768 0 0 1 4.947-.179c2.516 0 5.001.129 7.452.368v12.937a63.647 63.647 0 0 0-7.452-.438c-1.666 0-3.313.084-4.947.211V37.519zm-10.255 150.27c-34.682-7.043-60.784-37.704-60.784-74.462s26.103-67.419 60.784-74.461v13.197c-27.516 6.805-47.918 31.647-47.918 61.265s20.402 54.459 47.918 61.265v13.196zm22.654 1.157a77.082 77.082 0 0 1-7.452.367c-1.664 0-3.31-.071-4.947-.179v-12.899c1.634.127 3.282.212 4.947.212 2.522 0 5.008-.154 7.452-.44v12.939zm10.258-1.729v-13.29c20.147-5.88 36.124-21.535 42.456-41.486h-13.886c-7.511 18.166-25.398 30.954-46.28 30.954-27.651 0-50.066-22.417-50.066-50.067s22.415-50.067 50.066-50.067c18.894 0 35.337 10.47 43.86 25.919h14.465c-7.266-17.529-22.2-31.065-40.615-36.442v-13.3c33.42 7.983 58.276 38.026 58.276 73.89s-24.856 65.906-58.276 73.889z" />
    </svg>
  );
};

RbyAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RbyAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default RbyAlt;
