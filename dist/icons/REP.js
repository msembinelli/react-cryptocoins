'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Rep = function Rep(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 123.305 595.279 595.28',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M544.886 550.434L310.882 131.085a15.158 15.158 0 1 0-26.485 0L50.394 550.434c-3.945 7.068-1.641 15.991 5.232 20.27l234 145.596a15.193 15.193 0 0 0 16.027 0l234-145.596c6.873-4.279 9.177-13.202 5.233-20.27zM369.773 428.671c5.198 7.903 8.644 22.625 11.682 35.619 2.947 12.594 5.731 24.491 10.581 33.299 10.516 19.126 26.409 28.539 28.186 29.552.477.271.969.52 1.469.745l74.783 33.953-180.593 112.368v-64.124c0-.267-.013-.636-.022-.902-.226-5.13.904-11.989 1.988-13.543 1.856-1.664 9.067-6.145 14.866-9.746 16.803-10.438 39.82-24.739 54.345-41.279 2.143-2.442 4.042-5.024 5.916-7.621-7.173-6.398-15.519-15.55-22.196-27.7-.582-1.057-1.016-2.218-1.544-3.307-2.524 5.326-5.616 10.161-9.525 14.608-10.969 12.489-31.333 25.146-46.206 34.381-9.123 5.668-15.714 9.77-19.943 13.554-14.348 12.85-14.33 36.121-14.078 41.986v63.747L98.81 561.839l58.105-26.37c.189-.082.477-.223.664-.313 2.312-1.148 9.756-4.125 16.334-4.125 5.903 0 22.974 7.757 35.316 17.383 18.692 14.586 35.245 24.775 50.061 30.984 3.181-10.082 8.68-20.533 18.085-28.951.787-.705 1.681-1.382 2.527-2.069-9.785-3.037-25.186-10.638-48.285-28.661-11.121-8.68-37.493-25.084-57.706-25.084-15.493 0-29.318 6.345-32.335 7.826l-39.744 18.039L279.44 202.217v124.568c0 .267.013.633.025.899.223 5.129-.907 11.992-1.992 13.543-1.854 1.666-9.069 6.145-14.865 9.746-16.803 10.438-39.82 24.739-54.342 41.281-18.905 21.522-25.468 46.085-27.265 78.538 12.592 1.374 25.201 6.104 35.991 11.436.923-34.168 6.024-51.614 18.621-65.957 10.969-12.489 31.333-25.142 46.206-34.378 9.123-5.67 15.714-9.77 19.946-13.556 14.342-12.85 14.326-36.116 14.075-41.986V202.217l177.6 318.271-55.608-25.245c-2.002-1.338-9.115-6.487-13.904-15.19-2.435-4.438-4.875-14.857-7.028-24.059-3.729-15.941-7.96-34.011-16.717-47.323-11.597-17.636-30.136-40.012-64.091-51.435-3.168 10.167-8.674 20.7-18.146 29.182-.992.89-2.097 1.743-3.184 2.607 29.384 6.534 44.313 23.389 55.011 39.646z' })
  );
};

Rep.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Rep.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Rep;