import React from 'react';
import PropTypes from 'prop-types';

const Note = props => {
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
      <path d="M113.494 0C50.813 0 0 50.813 0 113.494s50.813 113.494 113.494 113.494 113.494-50.813 113.494-113.494S176.175 0 113.494 0zm-.525 89.487h-7.146v33.349a6.35 6.35 0 0 1-6.352 6.352 6.352 6.352 0 0 1-6.354-6.352V76.782h19.852c13.961 0 34.62 12.079 34.62 38.004 0 24.679-22.021 37.587-33.826 37.587H99.471a6.352 6.352 0 1 1 0-12.705h14.292c4.299 0 21.121-6.495 21.121-24.883.001-18.928-15.048-25.298-21.915-25.298zm5.083 83.055h-17.946a6.353 6.353 0 0 1 0-12.705h17.946c10.053 0 39.225-11.318 39.225-45.975 0-34.656-29.762-45.975-40.019-45.975H84.543v98.301a6.352 6.352 0 1 1-12.705 0V55.184h45.419c17.809 0 52.723 17.72 52.723 58.679 0 41.467-33.822 58.679-51.928 58.679z" />
    </svg>
  );
};

Note.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Note.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Note;
