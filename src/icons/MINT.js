import React from 'react';
import PropTypes from 'prop-types';

const Mint = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M225.963 141.436c-1.01-20.176-8.071-44.133-13.872-57.751-5.802-13.621-21.3-35.031-29.255-36.317-5.716-.924-10.592-.589-26.396 0-15.807.589-16.981 4.624-17.149 6.643-.171 2.018 5.38 5.211 9.919 10.254 4.541 5.042 17.316 27.908 20.681 39.678 3.365 11.771 6.39 22.194 7.399 41.022 1.009 18.83-.505 29.424 2.521 32.953 3.025 3.531 41.697 1.851 44.723 0 3.024-1.847 2.435-16.307 1.429-36.482z" />
      <path d="M150.164 83.685c-5.801-13.621-21.3-35.031-29.255-36.317-5.716-.924-10.593-.589-26.397 0-15.808.589-16.98 4.624-17.148 6.643-.17 2.018 5.378 5.211 9.918 10.254 4.54 5.042 17.317 27.908 20.681 39.678 3.363 11.771 6.389 22.194 7.399 41.022 1.008 18.83-.505 29.424 2.52 32.953 3.027 3.531 41.697 1.851 44.724 0 3.026-1.848 2.438-16.308 1.429-36.482-1.009-20.176-8.072-44.133-13.871-57.751z" />
      <path d="M89.67 83.685c-5.8-13.621-21.297-35.031-29.253-36.317-5.716-.924-10.593-.589-26.398 0-15.804.589-16.978 4.624-17.15 6.643-.169 2.018 5.382 5.211 9.92 10.254 3.682 4.092 12.789 19.917 17.892 32.029H-.257l17.122 17.095h33.223c1.475 5.673 2.771 11.648 3.688 19.021H7.058l17.121 17.096h30.888c.583 15.994-.449 25.18 2.324 28.413 3.026 3.531 41.694 1.851 44.721 0 3.026-1.848 2.438-16.308 1.429-36.482-1.01-20.177-8.07-44.134-13.871-57.752z" />
    </svg>
  );
};

Mint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mint.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Mint;