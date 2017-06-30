import React from 'react';
import PropTypes from 'prop-types';

const BcnAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M190.199 97.104s21.134-12.992 21.134-35.948c0-22.955-22.226-52.22-57.207-52.22H55.873v64.118H0v27.328h55.873v36.254H0v27.327h55.873v53.879h90.966c42.996 0 79.797-23.453 79.797-66.087-.001-42.624-36.437-54.651-36.437-54.651zm-51.74-59.391c18.22 0 36.802 8.74 36.802 28.602 0 19.858-19.675 29.876-37.896 29.876H93.278V37.713h45.181zm6.155 145.745H93.278V120.06h51.012c33.885 0 47.909 14.023 47.909 34.613 0 20.587-24.628 28.785-47.585 28.785z" />
    </svg>
  );
};

BcnAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BcnAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default BcnAlt;