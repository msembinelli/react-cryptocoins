import React from 'react';
import PropTypes from 'prop-types';

const Nlg = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M113.319 101.071v24.349h87.831c-5.901 43.238-42.974 76.556-87.831 76.556-48.964 0-88.657-39.691-88.657-88.657 0-48.963 39.693-88.657 88.657-88.657 24.496 0 46.67 9.936 62.714 25.996l17.69-17.188C173.195 12.801 144.753 0 113.319 0 50.735 0 0 50.734 0 113.318c0 62.584 50.735 113.319 113.319 113.319 62.583 0 113.318-50.735 113.318-113.319 0-4.14-.228-8.225-.659-12.248H113.319z" />
    </svg>
  );
};

Nlg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Nlg.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Nlg;
