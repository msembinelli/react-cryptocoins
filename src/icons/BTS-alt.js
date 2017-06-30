import React from 'react';
import PropTypes from 'prop-types';

const BtsAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      stroke={color}
      {...otherProps}
    >
      <path d="M92.506 142.156L43.653 93.302v58.718h45.025c.462-3.481 1.855-6.846 3.828-9.864zm-3.828 19.495H43.653c1.043 15.898 7.427 30.172 17.058 41.429l31.794-32.146c-1.972-2.666-3.365-5.917-3.827-9.283zm71.017-57.906c-11.259-9.864-25.529-16.247-41.428-17.059v45.025c3.596.581 6.846 1.973 9.633 3.83l31.795-31.796zm-24.367 66.726l31.795 31.795c9.633-11.256 15.665-25.296 16.71-40.848h-45.257c-.582 3.25-1.625 6.267-3.248 9.053zm3.248-18.451h45.023c-1.043-15.897-7.428-30.172-17.055-41.427l-31.799 31.912c1.975 2.669 3.249 6.034 3.831 9.515zm-71.017 57.674c11.254 9.863 25.53 16.246 41.427 17.058v-45.025c-3.599-.58-6.849-1.973-9.631-3.828l-31.796 31.795zm50.708-27.967v45.025c15.898-1.044 30.17-7.427 41.428-17.291l-31.563-31.563c-3.019 1.857-6.269 3.249-9.865 3.829zM43.653 78.798c12.068 12.067 49.897 50.246 56.279 56.515 2.785-1.628 5.804-3.02 8.821-3.601V58.14L43.769.003c-.116 0-.116 76.589-.116 78.795z" />
    </svg>
  );
};

BtsAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BtsAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default BtsAlt;
