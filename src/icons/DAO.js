import React from 'react';
import PropTypes from 'prop-types';

const Dao = props => {
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
        d="M119 46.5H68.3v59.3h45.1v14.9H68.3v58.1h49.8c26.7 0 51.5-15.2 51.5-65.6.1-50.4-30.4-66.7-50.6-66.7z"
      />
      <path
        class="st0"
        d="M0 0v226.8h226.8V0H0zm118.3 200.9H45.5v-80.2H28.6v-14.9h16.9V24.5h74c29.6 0 74 21.7 74 88.9s-36.1 87.5-75.2 87.5z"
      />
    </svg>
  );
};

Dao.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dao.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dao;
