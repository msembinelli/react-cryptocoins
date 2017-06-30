import React from 'react';
import PropTypes from 'prop-types';

const Lisk = props => {
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
      <path d="M149.643 44.609l-1.615 12.383 9.268 7.766 16.535-5.797-11.088-9.202-5.555-10.566-29.648-28.336 7.908 20.111z" />
      <path d="M128.194 51.057l-1.834 10.995-20.904 15.008 2.059 24.435 15.818 40.284 8.961-16.217-2.907-4.492 8.627-20.872V89.53l16.409-22.395-10.291-8.622 1.636-12.543-13.439-12.913-11.361-28.626-.801-.436.109 26.588z" />
      <path d="M169.923 123.32l1.625-2.846V98.935l3.724-36.592-17.211 6.031-16.379 22.355v10.195l-8.17 19.769 1.959 3.029 31.739 2.229zm-50.938 50.938l5.014 2.437 3.793-4.199 11.109-1.627 4.199-5.69 9.483-.269.543-2.846 9.345-1.76 2.813-30.812-29.815-2.094-10.748 19.446-10.47 28.281 1.078 5.228zm-25.483-44.18l-27.806 12.219.728 17.509 11.786 5.916 2.844 4.741 5.961-3.116 3.522 1.084 1.084-2.843 2.439-.95 7.586 2.981 2.844 7.045 6.097-2.846h.978l9.522-25.721-15.589-39.705z" />
      <path d="M61.276 131.719l2.325 7.494 27.223-11.965 13.015-25.698-2.021-24.011-51.525-16.914 11.932 62.017zm61.715-71.763l1.42-8.512-7.799-20.168L116.483.02l-2.373-.114-2.846 1.355-59.839 55.875 51.805 17.008zm55.867 96.557l-10.434-4.947-.709 7.781 3.154 1.496-13.227 9.057-14.705 11.756-15.541 4.02-12.605 6.627-15.755-5.826-28.186-16.041-11.865-9.67 2.304-.852-.32-7.701-9.868 3.646-7.359 13.92 1.252 24.422 15.212 6.541 2.367 1.84 31.329 15.316 2.619.395 14.94 8.223 7.813.355 10.293-5.441 32.303-15.271 24.129-13.236 1.906-21.432-9.047-14.978zm-64.01 55.553v7.26l-1.346-.061-14.592-8.031-2.8-.422-29.63-14.484-2.511-1.953-11.882-5.109-.915-17.846 4.542-8.59 13.056 10.643 28.582 16.264 16.023 5.951 3.137 12.67-1.664 3.708zm64.194-23.691l-20.404 11.199-32.277 15.26-7.844 4.143v-6.125l1.859-4.146-3.328-13.445 11.68-6.141 15.889-4.109 15.154-12.123 14.439-9.885 6.18 10.229-1.348 15.143z" />
    </svg>
  );
};

Lisk.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lisk.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Lisk;
