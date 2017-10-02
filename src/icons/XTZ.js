import React from 'react';
import PropTypes from 'prop-types';

const Xtz = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 227 227"
      fill={color}
      {...otherProps}
    >
      <path d="M133.449 227c-16.238 0-28.141-3.884-35.521-11.743-7.473-7.767-11.164-16.181-11.164-25.243 0-3.327.646-6.102 1.938-8.321s3.045-4.068 5.352-5.362c2.213-1.295 4.982-1.942 8.305-1.942 3.32 0 6.09.647 8.303 1.942 2.215 1.294 4.061 3.051 5.352 5.362s1.938 4.994 1.938 8.321c0 3.977-.922 7.212-2.859 9.709s-4.152 4.161-6.736 4.901c2.215 3.143 5.813 5.363 10.609 6.657 4.799 1.295 9.689 2.034 14.58 2.034 6.734 0 12.824-1.85 18.268-5.455 5.443-3.606 9.502-9.063 12.086-16.09 2.584-7.119 3.875-15.163 3.875-24.226 0-9.801-1.383-18.215-4.242-25.15-2.77-6.935-6.922-12.112-12.365-15.533s-11.348-5.085-17.621-5.085c-4.152 0-9.32 1.756-15.594 5.178l-11.441 5.731v-5.548l51.391-68.607H86.764v71.29c0 5.918 1.291 10.726 3.875 14.608 2.584 3.791 6.551 5.733 11.902 5.733 4.15 0 8.119-1.388 11.902-4.161 3.781-2.774 7.104-6.195 9.871-10.171.371-.74.738-1.388 1.293-1.757.553-.37 1.107-.555 1.66-.555.922 0 2.123.462 3.414 1.387 1.199 1.387 1.846 2.959 1.846 4.809a30.961 30.961 0 0 1-.646 3.605c-2.953 6.565-7.012 11.65-12.18 15.071-5.166 3.515-10.887 5.178-17.16 5.178-15.408 0-26.02-3.051-31.924-9.061-5.904-6.103-8.857-14.332-8.857-24.688V58.53H25.5V45.215h36.352V15.072L53.549 6.75V0h24.08l9.043 4.716v40.591l93.926-.276 9.32 9.339-57.574 57.697c3.506-1.387 7.105-2.219 10.887-2.589 6.273 0 13.287 1.942 21.129 5.918 7.844 3.976 13.84 9.338 18.084 16.088 4.244 6.844 7.012 13.315 8.213 19.604 1.291 6.287 1.844 11.835 1.844 16.643 0 11.097-2.307 21.452-7.012 30.977-4.705 9.523-11.717 16.643-21.313 21.359-9.318 4.622-19.652 6.935-30.725 6.935h-.002V227z" />
    </svg>
  );
};

Xtz.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Xtz.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Xtz;