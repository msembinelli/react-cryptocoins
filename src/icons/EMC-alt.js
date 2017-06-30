import React from 'react';
import PropTypes from 'prop-types';

const EmcAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M82.959 61.139L52.558 113.41l30.401 52.273h60.406l30.803-52.418-31.318-52.126H82.959zm58.774 80.191H84.666v-12.407h44.658V96.675h-10.248v22.941h-34.41v-12.411h21.999v-10.53H84.666V84.264h57.067v57.066z" />
      <path d="M113.411 0C50.776 0 0 50.776 0 113.41c0 62.635 50.776 113.411 113.411 113.411s113.41-50.775 113.41-113.411C226.821 50.776 176.046 0 113.411 0zm38.346 180.348H74.525L35.592 113.41l38.934-66.938h76.621l40.084 66.709-39.474 67.167z" />
    </svg>
  );
};

EmcAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EmcAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default EmcAlt;