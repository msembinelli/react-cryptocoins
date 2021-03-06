import React from 'react';
import PropTypes from 'prop-types';

const MaidAlt = props => {
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
      <path d="M132.587 150.202l-.022-30.772L80.25 89.2l132.213-74.367v-.022s-30.458-30.014-75.144-3.336C100.722 33.321 39.407 69.91 18.386 82.457l114.201 67.745z" />
      <path d="M96.434 89.284l24.71 14.214 51.526-30.353v153.872c2.313-1.198 39.792-21.126 39.792-53.019V24.012L96.434 89.284z" />
      <path d="M164.664 87.218l-24.126 14.327.063 62.714L10.997 87.384c-.262 4.507-1.647 37.959 14.935 50.596 15.143 11.553 110.677 68.038 138.732 84.572V87.218z" />
    </svg>
  );
};

MaidAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MaidAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default MaidAlt;
