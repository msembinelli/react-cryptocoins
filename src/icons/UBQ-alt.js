import React from 'react';
import PropTypes from 'prop-types';

const UbqAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      {...otherProps}
    >
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4c62.6 0 113.4-50.8 113.4-113.4S176 0 113.4 0zm21.401 57.602l41.932 25.274-41.932 24.329V57.602zM43.495 74.963L118.266 32.8v63.773l-74.771 43.22v-64.83zm48.504 94.235l-41.932-25.274 41.932-24.329v49.603zm91.306-17.361L108.534 194v-63.773l74.771-43.22v64.83z" />
    </svg>
  );
};

UbqAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UbqAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UbqAlt;
