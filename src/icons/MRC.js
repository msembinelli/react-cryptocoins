import React from 'react';
import PropTypes from 'prop-types';

const Mrc = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      stroke={color}
      {...otherProps}
    >
      <path d="M113.397 0C50.769 0 0 50.769 0 113.396c0 62.623 50.77 113.396 113.397 113.396 62.629 0 113.397-50.772 113.397-113.396C226.794 50.769 176.026 0 113.397 0zm43.731 85.704c-9.181-14.467-25.328-24.077-43.731-24.077-28.591 0-51.771 23.177-51.771 51.769 0 20.077 11.44 37.477 28.152 46.06V90.821h13.59v35.11c.129 1.893 1.279 10.441 11.575 10.441 9.266 0 10.241-8.779 10.322-11.47l-.002-34.082h13.59v34.228c-.14 10.072-6.621 24.915-23.91 24.915-4.568 0-8.397-.932-11.575-2.455v16.676c3.246.637 6.597.979 10.029.979 16.981 0 32.054-8.178 41.493-20.809l31.158 23.046c-16.5 22.162-42.896 36.521-72.651 36.521-49.996 0-90.528-40.531-90.528-90.525 0-49.997 40.532-90.525 90.528-90.525 31.974 0 60.055 16.591 76.16 41.618l-32.429 21.215z" />
    </svg>
  );
};

Mrc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mrc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Mrc;
