import React from 'react';
import PropTypes from 'prop-types';

const HeatAlt = props => {
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
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zm-12.841 40.621h25.683l1.271 51.711H99.287l1.272-51.711zM72.152 156.099c-15.524-.194-27.435-13.921-25.372-29.359l5.614-42.004c1.797-13.443 13.001-23.548 26.441-24.106l-6.683 95.469zm24.827 30.08l1.753-71.289h29.335l1.753 71.289H96.979zm57.669-30.08l-6.683-95.468c13.439.558 24.644 10.662 26.441 24.106l5.614 42.004c2.063 15.437-9.848 29.164-25.372 29.358z" />
    </svg>
  );
};

HeatAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HeatAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default HeatAlt;
