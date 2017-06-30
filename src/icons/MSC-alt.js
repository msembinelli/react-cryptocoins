import React from 'react';
import PropTypes from 'prop-types';

const MscAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M101.323 84.538L78.563 33.87-.031 185.55l57.136-12.456c-3.926-8.192-6.127-17.368-6.127-27.061 0-30.402 21.634-55.747 50.345-61.495zM226.777 185.55L150.535 33.87l-23.878 50.788c28.424 5.969 49.767 31.177 49.767 61.375 0 9.743-2.222 18.966-6.184 27.192l56.537 12.325z" />
      <circle cx="113.701" cy="146.032" r="43.808" />
    </svg>
  );
};

MscAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MscAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default MscAlt;