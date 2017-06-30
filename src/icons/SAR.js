import React from 'react';
import PropTypes from 'prop-types';

const Sar = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M113.411 53.739L94.055 86.361 61.973 53.739l51.438 137.767 51.438-137.767-32.083 32.622z" />
      <path d="M113.411 0C50.776 0 0 50.777 0 113.41c0 62.637 50.776 113.411 113.411 113.411 62.634 0 113.41-50.773 113.41-113.411C226.821 50.777 176.045 0 113.411 0zm96.449 130.633c-1.934 10.84-5.739 21.538-11.55 31.634-5.808 10.093-13.145 18.76-21.545 25.88l1.145 7.393c-17.758 13.968-40.155 22.296-64.499 22.296-24.29 0-46.642-8.294-64.381-22.202l1.135-7.394c-8.411-7.108-15.761-15.765-21.584-25.849-5.824-10.089-9.645-20.781-11.596-31.621l-6.971-2.714a105.09 105.09 0 0 1-1.028-14.645c0-43.872 27.058-81.419 65.395-96.878l5.851 4.692c10.362-3.731 21.532-5.768 33.179-5.768s22.817 2.037 33.18 5.768l5.85-4.692c38.337 15.461 65.395 53.007 65.395 96.878 0 4.919-.348 9.757-1.005 14.495l-6.971 2.727z" />
    </svg>
  );
};

Sar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sar.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sar;
