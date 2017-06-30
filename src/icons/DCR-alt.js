import React from 'react';
import PropTypes from 'prop-types';

const DcrAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 595.279 595.281"
      stroke={color}
      {...otherProps}
    >
      <path d="M297.648 0C133.262 0 0 133.262 0 297.646c0 164.389 133.262 297.651 297.648 297.651 164.386 0 297.649-133.262 297.649-297.651C595.297 133.262 462.034 0 297.648 0zm-60.674 422.967c-56.094 0-101.569-45.47-101.569-101.565 0-42.553 26.179-79.003 63.303-94.11l-63.294-54.947h72.426l109.405 94.975h-80.271c-29.815 0-54.087 24.257-54.087 54.083 0 29.816 24.268 54.084 54.087 54.084h25.572l54.698 47.481h-80.27zm222.904 0H387.45l-109.404-94.958h80.277c29.822 0 54.081-24.272 54.081-54.096 0-29.825-24.259-54.087-54.081-54.087h-25.572l-54.705-47.481h80.277c56.09 0 101.56 45.482 101.56 101.569 0 42.555-26.175 78.997-63.3 94.104l63.295 54.949z" />
    </svg>
  );
};

DcrAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DcrAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default DcrAlt;
