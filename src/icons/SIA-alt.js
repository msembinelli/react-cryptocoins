import React from 'react';
import PropTypes from 'prop-types';

const SiaAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      width={size}
      height={size}
      stroke={color}
      {...otherProps}
    >
      <path
        class="st0"
        d="M147.5 116.5c-8.9-8.9-23.3-8.9-32.2 0-8.9 8.9-8.9 23.3 0 32.2 2.9 2.9 6.3 4.8 9.9 5.8 3.3.9 6.8.9 7.1.9h15.1c1.7 0 3.7-.8 4.9-2s2-3.2 2-4.9V133c0-.3 0-2.2-.9-6.6-.8-3.7-3-7-5.9-9.9z"
      />
      <path
        class="st0"
        d="M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zM77.3 72.5l.3.3-.3-.3zm91.8 90.8c0 1.7-1 3.6-2.2 4.9-1.2 1.2-3 2.1-4.7 2.1 0 0-31.6.1-33.8-.1-8.5-.8-17.1-4.6-23.5-11.1-2-2-3.8-4.2-5.2-6.6-6.8-10.9-7.5-24.5-2.1-36 2.8-6.1 1.8-13.4-2.9-18.6-.2-.2-.3-.4-.5-.6L70.9 74.1c-1.7-1.5-4-2.1-6.2-1.9-.5.1-1 .1-1.5.1-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9c0 .5-.1 1-.1 1.5-.2 2.1.4 4.3 2 6.1l23.1 23.1c.2.2.5.4.7.7 5.2 4.7 12.5 5.6 18.6 2.9 11.5-5.4 25.1-4.7 36 2.1 2.3 1.5 4.6 3.2 6.6 5.2 6.5 6.5 10.1 14.2 10.8 22.7 0 .3.4 2.5.4 4-.1 1.5-.1 30.6-.1 30.6z"
      />
    </svg>
  );
};

SiaAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SiaAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default SiaAlt;
