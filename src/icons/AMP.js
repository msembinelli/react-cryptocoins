import React from 'react';
import PropTypes from 'prop-types';

const Amp = props => {
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
      <path d="M113.388 0C50.765 0 0 50.764 0 113.389c0 62.624 50.766 113.388 113.389 113.388 62.622 0 113.388-50.765 113.388-113.388C226.776 50.764 176.01 0 113.388 0zM56.549 113.177c0-13.681 11.09-24.771 24.772-24.771 13.68 0 24.771 11.09 24.771 24.771 0 13.682-11.091 24.771-24.771 24.771-13.682 0-24.772-11.09-24.772-24.771zm101.129 24.771c-19.322 0-34.986 15.664-34.986 34.987 0 13.682-11.091 24.771-24.772 24.771s-24.771-11.09-24.771-24.771c0-13.681 11.09-24.771 24.771-24.771 19.322 0 34.988-15.664 34.988-34.987S117.242 78.19 97.92 78.19l.014-.013c-.091.001-.18.013-.27.013-13.682 0-24.772-11.091-24.772-24.772 0-13.68 11.09-24.772 24.772-24.772 13.68 0 24.771 11.092 24.771 24.772h.002c0 19.324 15.663 34.988 34.986 34.988l-.014.014c.09-.002.179-.014.269-.014 13.682 0 24.772 11.09 24.772 24.771.001 13.681-11.09 24.771-24.772 24.771z" />
    </svg>
  );
};

Amp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Amp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Amp;
