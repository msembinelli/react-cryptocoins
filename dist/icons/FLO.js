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

var Flo = function Flo(props) {
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
    _react2.default.createElement('path', { d: 'M113.402 0C50.768 0 .006 50.771.006 113.396c0 62.646 50.762 113.404 113.396 113.404 62.63 0 113.393-50.758 113.393-113.404C226.794 50.771 176.032 0 113.402 0zm0 211.091c-53.868 0-97.695-43.827-97.695-97.695 0-53.87 43.827-97.695 97.695-97.695 53.872 0 97.703 43.824 97.703 97.695-.001 53.868-43.831 97.695-97.703 97.695z' }),
    _react2.default.createElement('path', { d: 'M88.969 137.86c14.851 7.437 34.034 7.437 48.874 0-1.356-6.763-.824-2.389-1.356-5.767-13.53 6.901-32.575 6.97-46.151 0-.372 2.596-.138-.161-1.367 5.767z' }),
    _react2.default.createElement('path', { d: 'M102.825 130.744c5.235 2.596 15.893 2.596 21.174 0-.046-7.1 2.826-32.47 15.131-55.44 0 0 3.056-5.791 1.62-14.779-1.413-8.99-14.2-20.295-24.097-27.964-.762-.601-1.734-.927-2.719-1.019v-.023c-.176-.011-.36-.023-.533-.011-.176-.011-.337 0-.513.011 0 0 0 .012-.011.023-.973.092-1.946.418-2.719 1.019-9.884 7.669-22.695 18.974-24.108 27.964-1.413 8.988 1.647 14.779 1.647 14.779 12.278 22.971 15.128 48.34 15.128 55.44zM87.429 141.82s-6.173 9.36-8.678 11.053c-2.524 1.716-4.354 0-4.354 0s-1.992-1.271-4.795-5.285c-.326-.505-.961-.528-1.184 0-2.294 5.775-2.707 7.789-3.194 10.333-.502 2.596-.502 4.634.161 6.464.67 1.555 2.34 3.524 5.327 4.082 3.025.552 7.345.766 10.08-1.256 2.711-2.014 3.102-2.244 6.905-7.46 3.776-5.231 7.318-14.591 7.318-14.591l-7.586-3.34zm-20.144-32.966s4.68-2.491 9.486 1.424c9.697 7.889 10.972 12.37 12.684 15.349 1.704 2.964 10.011 4.764 10.011 4.764s-1.762-20.221-10.171-32.079c-8.422-11.864-13.136-14.629-20.271-17.885-5.817-2.654-17.214-.789-19.393 0-9.777 2.941-12.603 15.591-12.603 15.591s-1.528 6.277-.915 17.538c1.018 16.544 5.641 26.18 5.641 26.18s.487 1.042 1.831.536c2.11-.812 10.681-5.898 18.884-18.574 2.569-4.159 2.593-8.104 2.757-9.858.16-1.76 2.059-2.986 2.059-2.986zm56.714 38.297c-10.585 1.248-10.585 1.248-21.174 0 0 0-2.711 2.413-7.809 11.236-5.097 8.824-3.01 11.351 0 17.188 4.021 7.721 14.897 17.961 16.276 18.98a4.1 4.1 0 0 0 1.693.72v.023h.853v-.023a4.055 4.055 0 0 0 1.681-.72c1.367-1.019 12.266-11.259 16.264-18.98 3.022-5.836 5.097-8.364 0-17.188-5.096-8.824-7.784-11.236-7.784-11.236zm34.394.436c-.222-.528-.846-.505-1.195 0-2.78 4.014-4.772 5.285-4.772 5.285s-1.853 1.716-4.354 0c-2.528-1.693-8.69-11.053-8.69-11.053l-7.598 3.34s3.543 9.36 7.346 14.591c3.799 5.216 4.178 5.446 6.901 7.46 2.711 2.022 7.043 1.808 10.056 1.256 3.01-.559 4.68-2.527 5.35-4.082.662-1.831.662-3.868.165-6.464-.498-2.543-.904-4.557-3.209-10.333zm31.403-51.568s-2.849-12.649-12.615-15.591c-2.168-.789-13.565-2.654-19.382 0-7.135 3.255-11.86 6.02-20.27 17.885-8.433 11.858-10.172 32.079-10.172 32.079s8.586-1.8 10.022-4.764c1.425-2.98 2.953-7.46 12.661-15.349 4.806-3.916 9.486-1.424 9.486-1.424s1.911 1.225 2.076 2.987c.161 1.754.184 5.698 2.753 9.858 8.18 12.676 16.774 17.762 18.884 18.574 1.344.505 1.808-.536 1.808-.536s4.634-9.636 5.664-26.18c.59-11.262-.915-17.539-.915-17.539z' })
  );
};

Flo.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Flo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Flo;