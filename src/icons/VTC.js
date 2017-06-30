import React from 'react';
import PropTypes from 'prop-types';

const Vtc = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M210.49 54.537l-91.335 129.297s-1.766 2.699-5.347 2.699c-3.584 0-5.921-2.855-5.921-2.855L92.13 162.781l94.899-135.729C167.221 10.185 141.549 0 113.494 0 50.813 0 0 50.813 0 113.494s50.813 113.494 113.494 113.494 113.494-50.813 113.494-113.494c0-21.591-6.03-41.774-16.498-58.957zm-181.532 56.08l9.892-11.069 8.347 11.069H28.958zm12.856-14.385l.23-.259h44.709l24.468 31.878-21.854 31.27-47.553-62.889z" />
    </svg>
  );
};

Vtc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Vtc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Vtc;
