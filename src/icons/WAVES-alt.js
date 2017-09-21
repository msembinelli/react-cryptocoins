import React from 'react';
import PropTypes from 'prop-types';

const WavesAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 123.305 595.279 595.28"
      fill={color}
      {...otherProps}
    >
      <path d="M297.64 123.42C133.323 123.42.116 256.627.116 420.944S133.323 718.468 297.64 718.468s297.523-133.206 297.523-297.523S461.957 123.42 297.64 123.42zM176.11 333.021l92.467-92.467c16.004-16.001 42.197-16.001 58.204 0l92.651 92.655c5.339 5.338 5.339 14.056 0 19.403l-27.859 27.859-18.68 17.268a14.335 14.335 0 0 1-19.537 0l-37.349-34.547c-10.25-9.498-26.026-9.498-36.29 0L242.38 397.74a14.349 14.349 0 0 1-19.548 0l-18.672-17.279-28.05-28.045c-5.336-5.338-5.336-14.056 0-19.395zm295.861 123.111l-145.202 145.21c-16.007 15.999-42.194 15.999-58.192 0L123.375 456.141c-26.293-26.291-6.025-34.49 13.282-52.356l20.915-19.349a14.352 14.352 0 0 1 19.546 0l37.343 34.547c10.261 9.498 26.034 9.498 36.298 0l37.34-34.547a14.34 14.34 0 0 1 19.537 0l37.35 34.547a26.67 26.67 0 0 0 36.289 0l37.344-34.547c5.543-5.122 14.07-5.185 19.548 0l22.777 21.584c18.461 17.484 36.196 24.943 11.027 50.112z" />
    </svg>
  );
};

WavesAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WavesAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default WavesAlt;
