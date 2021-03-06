import React from 'react';
import PropTypes from 'prop-types';

const Snrg = props => {
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
        d="M112.5 0l-90 58.6v41.7l43 27.6 74.3-48.2-26.4-17.1-48.1 31.7-23-14.9 70.2-45.6 91.7 59.8V60z"
      />
      <path
        class="st0"
        d="M87 147l26.3 17.2 48.2-31.7 23 14.9-70.3 45.6-91.7-59.8v33.6l91.7 60 90-58.7v-41.6l-42.9-27.7z"
      />
    </svg>
  );
};

Snrg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Snrg.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Snrg;
