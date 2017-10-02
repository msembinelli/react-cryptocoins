import React from 'react';
import PropTypes from 'prop-types';

const Dct = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 227 227"
      fill={color}
      {...otherProps}
    >
      <path d="M0 54v119h22.924V77.227h30.88c23.879 0 34.385 8.592 50.622 43.592C120.836 156.191 139.13 173 171.604 173H227v-22.59h-55.396c-20.693 0-30.883-7.32-46.164-39.455C110.157 78.818 93.92 54 53.805 54H0zm171.604 0c-22.896 0-38.744 8.355-51.852 25.684 4.73 7.028 8.92 14.707 12.8 22.586 11.759-20.545 21.72-25.68 39.052-25.68H227V54h-55.396zm-76.65 70.607c-11.66 19.75-22.191 25.166-41.15 25.166H33.111V173h20.694c25.544 0 41.408-10.063 53.506-25.672-4.358-6.63-8.342-14.07-12.127-22.227l-.23-.494z" />
    </svg>
  );
};

Dct.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dct.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dct;