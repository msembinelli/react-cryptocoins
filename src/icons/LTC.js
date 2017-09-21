import React from 'react';
import PropTypes from 'prop-types';

const Ltc = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      fill={color}
      {...otherProps}
    >
      <path d="M113.441 0C50.789 0 0 50.79 0 113.443c0 62.654 50.789 113.441 113.441 113.441 62.654 0 113.443-50.787 113.443-113.441C226.885 50.79 176.096 0 113.441 0zm44.036 168.762H68.839l7.45-35.566-14.486 9.933 3.519-19.463 15.151-10.43 14.862-70.939h27.671l-10.232 48.71L148.8 66.213l-4.222 20.167-36.02 24.693-7.126 33.93H162.4l-4.923 23.759z" />
    </svg>
  );
};

Ltc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ltc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Ltc;
