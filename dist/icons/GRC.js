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

var Grc = function Grc(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.777 226.777',
      fill: color
    }, otherProps),
    _react2.default.createElement('circle', { cx: '111.893', cy: '132.846', r: '1.914' }),
    _react2.default.createElement('circle', { cx: '111.512', cy: '108.548', r: '1.914' }),
    _react2.default.createElement('path', { d: 'M123.259 153.379l-1.387.352 6.314 34.337 1.553-.343c34.521-7.7 59.58-38.994 59.58-74.419 0-4.362-.376-8.732-1.103-12.999l-.221-1.269h-71.261v3.061h68.675c.247 1.627.421 3.271.56 4.919h-69.234v3.06h69.402c.048 1.078.123 2.152.123 3.228 0 .501-.055.987-.063 1.489H135.74c-.638-1.823-2.354-3.14-4.388-3.14a4.674 4.674 0 0 0-4.667 4.668 4.673 4.673 0 0 0 4.667 4.667c2.033 0 3.75-1.318 4.388-3.141h50.323a72.463 72.463 0 0 1-.567 5.482h-58.272c-.638-1.821-2.354-3.138-4.386-3.138a4.67 4.67 0 0 0-4.665 4.668 4.673 4.673 0 0 0 4.665 4.667c2.032 0 3.748-1.316 4.386-3.139h57.811c-5.15 27.867-26.374 51.074-54.417 57.982l-5.227-28.404c11.729-3.382 21.586-11.491 27.201-22.423l1.142-2.228h-36.998v3.056h31.902c-5.597 9.439-14.721 16.305-25.379 19.007zm8.093-35.141a1.915 1.915 0 0 1-1.912-1.915c0-1.059.856-1.916 1.912-1.916 1.054 0 1.91.857 1.91 1.916a1.914 1.914 0 0 1-1.91 1.915zm-8.514 8.536a1.913 1.913 0 1 1 .001-3.825 1.913 1.913 0 0 1-.001 3.825zm-20.396-28.122a1.912 1.912 0 0 0-1.911 1.915 1.91 1.91 0 1 0 3.821 0 1.916 1.916 0 0 0-1.91-1.915z' }),
    _react2.default.createElement('path', { d: 'M127.153 146.666a3.824 3.824 0 0 0 2.612 1.05 3.869 3.869 0 0 0 3.872-3.869 3.873 3.873 0 0 0-3.872-3.872c-1.759 0-3.18 1.195-3.651 2.8-4.092 1.803-8.534 2.801-13.04 2.801-17.795 0-32.269-14.476-32.269-32.27 0-17.793 14.474-32.268 32.269-32.268 3.949 0 7.767.742 11.399 2.115.606 1.351 1.947 2.301 3.524 2.301a3.87 3.87 0 0 0 3.871-3.874 3.87 3.87 0 0 0-3.871-3.87c-1.19 0-2.217.568-2.925 1.414a36.035 36.035 0 0 0-11.999-2.065c-3.704 0-7.275.564-10.642 1.603l-8.556-39.177-1.56.438C59.648 49.142 36.83 79.32 36.83 113.304c0 3.682.27 7.392.794 11.021l.251 1.756L71.81 115.9l-.043-1.184c-.016-.468-.022-.94-.022-1.412 0-13.761 6.898-26.587 18.193-34.231a3.894 3.894 0 0 0 5.42-3.583 3.895 3.895 0 1 0-7.789 0c0 .469.117.906.267 1.324-11.896 8.245-19.151 21.868-19.151 36.491v.341l-28.271 8.481a75.348 75.348 0 0 1-.524-8.822c0-32.079 21.174-60.621 51.696-69.978l7.945 36.386C86.242 85.09 76.829 98.11 76.829 113.305c0 2.855.368 5.623.997 8.291l-38.37 11.658.424 1.449c9.424 32.294 39.523 54.847 73.198 54.847a78.413 78.413 0 0 0 6.603-.284l1.628-.141-6.145-39.701c4.133-.243 8.191-1.162 11.989-2.758zm-9.37 39.675a78.265 78.265 0 0 1-4.709.151c-31.813 0-60.308-20.976-69.821-51.198l27.588-8.376c4.472 13.89 15.539 24.726 29.5 28.896.511 1.556 1.927 2.696 3.652 2.696 2.151 0 3.893-1.744 3.893-3.896s-1.742-3.894-3.893-3.894c-1.452 0-2.67.829-3.337 2.009-12.722-4-22.777-13.973-26.892-26.701l4.874-1.481c4.642 14.192 17.818 24.528 33.443 24.955l5.702 36.839z' }),
    _react2.default.createElement('path', { d: 'M113.327.031C50.738.031 0 50.77 0 113.359c0 62.588 50.738 113.327 113.327 113.327s113.327-50.738 113.327-113.327S175.916.031 113.327.031zm0 193.511c-44.282 0-80.183-35.898-80.183-80.182 0-44.292 35.901-80.184 80.183-80.184 35.879 0 66.253 23.558 76.49 56.063h-59.774a29.227 29.227 0 0 0-16.716-5.219c-16.202 0-29.339 13.135-29.339 29.34 0 16.204 13.137 29.341 29.339 29.341 5.006 0 9.719-1.256 13.844-3.468h-10.436v-4.859h-.453c-.64 1.824-2.354 3.142-4.389 3.142-2.571 0-4.666-2.094-4.666-4.668s2.094-4.668 4.666-4.668c2.035 0 3.749 1.316 4.389 3.139h.453v-21.24h-.837c-.638 1.822-2.354 3.139-4.386 3.139a4.673 4.673 0 0 1-4.666-4.668 4.672 4.672 0 0 1 4.666-4.669c2.031 0 3.748 1.319 4.386 3.139h.837v-4.919h-9.91c-.637 1.822-2.354 3.138-4.383 3.138a4.67 4.67 0 0 1-4.666-4.669 4.67 4.67 0 0 1 4.666-4.667c2.03 0 3.747 1.319 4.383 3.138h9.91v-3.93h74.671v-.071a80.427 80.427 0 0 1 2.105 18.322c0 44.281-35.902 80.18-80.184 80.18z' }),
    _react2.default.createElement('path', { d: 'M110.219 72.077a41.36 41.36 0 0 1 33.926 13.972l.454.522h39.933l-.861-2.11c-11.776-28.793-39.486-47.396-70.597-47.396a77.14 77.14 0 0 0-9.596.599l-1.64.208 7.042 34.296 1.339-.091zm2.855-31.953c29.098 0 55.096 16.951 66.863 43.389H145.98a44.424 44.424 0 0 0-34.635-14.561l-5.841-28.44a73.828 73.828 0 0 1 7.57-.388z' })
  );
};

Grc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Grc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Grc;