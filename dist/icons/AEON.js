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

var Aeon = function Aeon(props) {
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
    _react2.default.createElement('path', { d: 'M170.15 25.549c-4.412-9.821-10.858-16.744-19.228-19.664C128.626-1.891 99.34 21.023 77.74 59.856a245.669 245.669 0 0 1 12.967-2.707c27.974-18.694 56.502-29.656 79.443-31.6zM56.692 201.228c4.411 9.82 10.86 16.742 19.229 19.663 22.295 7.777 51.58-15.14 73.18-53.968a246.134 246.134 0 0 1-12.969 2.704c-27.974 18.695-56.5 29.655-79.44 31.601z' }),
    _react2.default.createElement('path', { d: 'M106.562 54.793c41.412-4.847 79.165.742 103.043 13.256.924-9.254-.836-17.388-5.645-23.696-15.684-20.568-58.672-15.034-102.154 11.045a264.85 264.85 0 0 1 4.756-.605zm13.717 117.188c-41.411 4.85-79.164-.739-103.042-13.253-.923 9.256.835 17.389 5.645 23.694 15.684 20.57 58.671 15.034 102.151-11.046-1.576.218-3.158.422-4.754.605zm-36.286-54.149c-5.805 2.009-8.762 9.71-3.906 13.561 4.855 3.854 13.003 2.065 16.797-1.729 3.795-3.794 6.083-13.112 6.083-13.112s-13.169-.73-18.974 1.28zm47.158-22.045c-6.306 4.465-6.918 13.729-6.918 13.729s6.861.616 16.015-.391c9.153-1.004 10.772-8.426 8.54-13.004-2.234-4.573-11.328-4.798-17.637-.334z' }),
    _react2.default.createElement('path', { d: 'M226.504 100.153C223 70.215 169.532 51.871 107.076 59.18 44.621 66.491-3.168 96.689.337 126.626c3.505 29.937 56.976 48.28 119.429 40.969 62.454-7.31 110.244-37.506 106.738-67.442zm-57.069 5.476c-4.165 13.096-24.404 15.552-24.404 15.552-8.112 1.117-22.995.966-22.995.966-1.04 9.228 4.688 10.567 14.811 10.718 10.119.146 22.694-5.658 22.694-5.658l-3.125 16.074s-12.427 3.348-21.656 3.199c-9.226-.146-21.503.3-28.999-11.234-7.495 8.407-17.134 11.829-30.007 11.905-12.874.074-22.101-7.591-18.529-24.035 3.571-16.446 25.077-18.232 25.077-18.232 10.938-1.488 23.29-1.041 23.29-1.041 1.564-10.046-7.961-10.642-17.709-10.567-9.748.075-19.792 5.508-19.792 5.508l2.752-15.85s10.491-2.456 23.887-3.498c13.394-1.042 23.364 4.093 26.565 11.385 7.888-8.633 22.396-13.917 35.345-11.46 12.946 2.456 16.965 13.172 12.795 26.268z' })
  );
};

Aeon.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Aeon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Aeon;