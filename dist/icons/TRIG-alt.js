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

var TrigAlt = function TrigAlt(props) {
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
    _react2.default.createElement('path', { d: 'M135.653 100.404h-3.757v-1.665c0-10.4-8.297-18.86-18.495-18.86s-18.495 8.461-18.495 18.86v1.665h-3.757a5.054 5.054 0 0 0-5.054 5.054v28.909a6.855 6.855 0 0 0 6.855 6.855h40.903a6.855 6.855 0 0 0 6.855-6.855v-28.909a5.056 5.056 0 0 0-5.055-5.054zm-17.513 32.505h-9.48l1.774-13.473a6.223 6.223 0 0 1 2.965-11.696 6.224 6.224 0 0 1 2.966 11.696l1.775 13.473zm6.629-32.505H102.03v-1.665c0-6.47 5.1-11.734 11.369-11.734s11.37 5.264 11.37 11.734v1.665z' }),
    _react2.default.createElement('path', { d: 'M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zm61.189 119.203c-4.411 22.697-11.367 38.264-28.673 54.043-14.251 13.021-32.513 19.553-32.515 19.554-.003-.001-18.265-6.533-32.515-19.554-17.306-15.779-24.262-31.345-28.673-54.043-4.411-22.697 5.175-56.218 5.175-56.218s4.581-1.654 8.08-4.517c3.499-2.863 6.765-7.168 6.765-7.168h82.337s3.266 4.305 6.765 7.168c3.499 2.863 8.08 4.517 8.08 4.517s9.585 33.521 5.174 56.218z' })
  );
};

TrigAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

TrigAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = TrigAlt;