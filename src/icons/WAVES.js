import React from 'react';
import PropTypes from 'prop-types';

const Waves = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 123.305 595.279 595.28"
      fill={color}
      {...otherProps}
    >
      <path d="M488.968 287.71l-145.55-145.549c-25.145-25.143-66.289-25.143-91.434 0l-145.25 145.253c-8.386 8.385-8.386 22.08 0 30.465l44.058 44.055 29.332 27.145a22.54 22.54 0 0 0 30.705 0l58.658-54.272c16.122-14.919 40.901-14.919 57.012 0l58.67 54.272a22.519 22.519 0 0 0 30.688 0l29.344-27.127 43.768-43.765c8.381-8.397 8.381-22.091-.001-30.477z" />
      <path d="M23.894 471.66l228.091 228.097c25.131 25.13 66.271 25.13 91.417 0l228.093-228.108c39.541-39.537 11.682-51.258-17.323-78.722l-35.78-33.906c-8.603-8.143-21.998-8.049-30.705 0l-58.658 54.269c-16.121 14.919-40.891 14.919-57.012 0l-58.67-54.269a22.525 22.525 0 0 0-30.693 0l-58.658 54.269c-16.122 14.919-40.902 14.919-57.021 0l-58.659-54.269a22.544 22.544 0 0 0-30.708 0l-32.853 30.395c-30.329 28.061-62.167 40.94-20.861 82.244z" />
    </svg>
  );
};

Waves.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Waves.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Waves;
