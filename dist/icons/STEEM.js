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

var Steem = function Steem(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M37.1 24.5C34.8 23.4 6.4 46.9 6.4 64.2c0 23.6 33.2 77.2 38.8 97.9 4.8 17.8-8.2 39.1-4.6 40.1 3.3 2.1 34.3-29.3 35.5-42.7C77.7 138.2 39.9 76 36.9 60c-3.6-18.7 2.7-35.1.2-35.5zm71-24.5c-2.9-1.4-39.2 28.5-39.2 50.6 0 30.2 42.3 98.5 49.5 124.9 6.1 22.7-10.4 49.9-5.9 51.1 4.2 2.7 43.7-37.3 45.2-54.4 2-27.2-46.2-106.4-50-126.9-4.4-23.8 3.6-44.7.4-45.3zm73.3 24.5c-2.2-1.1-30.7 22.4-30.7 39.7 0 23.6 33.2 77.2 38.8 97.9 4.8 17.8-8.2 39.1-4.6 40.1 3.3 2.1 34.3-29.3 35.5-42.7C222 138.2 184.2 76 181.2 60c-3.5-18.7 2.7-35.1.2-35.5z' })
  );
};

Steem.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Steem.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Steem;