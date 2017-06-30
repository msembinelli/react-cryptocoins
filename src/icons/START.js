import React from 'react';
import PropTypes from 'prop-types';

const Start = props => {
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
      <path d="M113.388 0C50.765 0 0 50.767 0 113.392c0 62.618 50.765 113.385 113.389 113.385 62.626 0 113.389-50.768 113.389-113.385C226.777 50.767 176.014 0 113.388 0zm45.814 67.375a42.965 42.965 0 0 1-.448 2.947 40.592 40.592 0 0 1-.754 3.255 18.506 18.506 0 0 1-1.099 3.035c-.434.921-.916 1.682-1.452 2.275-.534.594-1.097.888-1.696.888-.937 0-2.104-.368-3.502-1.109-1.401-.745-3.118-1.549-5.151-2.411-2.035-.858-4.418-1.667-7.148-2.413-2.738-.74-5.836-1.112-9.306-1.112-3.6 0-6.649.445-9.149 1.338-2.502.892-4.553 2.068-6.152 3.53-1.602 1.451-2.787 3.095-3.55 4.903-.769 1.819-1.149 3.648-1.149 5.487 0 2.142.599 4.031 1.796 5.673 1.202 1.633 2.803 3.152 4.805 4.55 1.999 1.403 4.282 2.756 6.849 4.06a372.327 372.327 0 0 1 7.807 4.104 105.927 105.927 0 0 1 7.795 4.682 35.28 35.28 0 0 1 6.855 5.899c1.998 2.227 3.601 4.785 4.801 7.674 1.198 2.883 1.799 6.197 1.799 9.948 0 5.595-1.267 10.786-3.8 15.572-2.536 4.797-6.118 8.959-10.753 12.498-4.634 3.536-10.237 6.326-16.801 8.34a63.836 63.836 0 0 1-5.689 1.442l-1.028 14.367a5.519 5.519 0 0 1-5.826 5.202 5.522 5.522 0 0 1-5.199-5.825l.878-12.308a86.7 86.7 0 0 1-4.993.162c-1.324 0-2.554-.084-3.815-.142l-.924 12.91a5.518 5.518 0 0 1-5.824 5.202 5.523 5.523 0 0 1-5.201-5.825l.974-13.642c-2.52-.509-4.891-1.067-6.966-1.721-2.832-.893-5.217-1.83-7.151-2.809-1.934-.981-3.367-1.922-4.299-2.81-.936-.894-1.401-2.231-1.401-4.021 0-.476.068-1.187.201-2.143.132-.951.315-1.98.548-3.074.236-1.099.516-2.235.851-3.394a18.856 18.856 0 0 1 1.202-3.167c.463-.951.981-1.726 1.549-2.319.566-.593 1.183-.896 1.852-.896 1.131 0 2.48.461 4.05 1.387 1.563.922 3.513 1.932 5.848 3.03 2.333 1.103 5.1 2.128 8.303 3.078 3.199.953 7.036 1.433 11.501 1.433 3.934 0 7.387-.446 10.354-1.338 2.962-.897 5.449-2.113 7.45-3.659 2.001-1.548 3.519-3.352 4.549-5.402 1.036-2.054 1.555-4.3 1.555-6.738 0-2.199-.602-4.132-1.804-5.799-1.201-1.667-2.786-3.203-4.752-4.601-1.966-1.396-4.199-2.725-6.698-3.965a222.1 222.1 0 0 1-7.649-4.022 103.987 103.987 0 0 1-7.652-4.638 34.048 34.048 0 0 1-6.703-5.849c-1.966-2.226-3.553-4.8-4.75-7.723-1.199-2.912-1.799-6.305-1.799-10.168 0-5.355 1.201-10.298 3.598-14.819 2.402-4.521 5.736-8.399 10.002-11.646 3.361-2.553 7.257-4.647 11.656-6.319l1.222-17.092c.172-3.05 2.804-5.378 5.825-5.202a5.522 5.522 0 0 1 5.202 5.824l-.964 13.465a70.424 70.424 0 0 1 8.872-.883l.94-13.204c.177-3.05 2.806-5.378 5.827-5.202a5.52 5.52 0 0 1 5.201 5.824l-.928 12.985c.514.059 1.051.092 1.555.166 3.003.45 5.738 1.01 8.202 1.697 2.466.685 4.567 1.441 6.301 2.274 1.736.834 2.934 1.536 3.601 2.1.667.562 1.151 1.157 1.451 1.778.3.628.451 1.418.451 2.369-.002.483-.055 1.164-.153 2.057z" />
    </svg>
  );
};

Start.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Start.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Start;
