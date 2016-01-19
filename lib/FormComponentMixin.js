'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

exports['default'] = {

  propTypes: {
    name: _react2['default'].PropTypes.string.isRequired
  },

  handleValueChange: function handleValueChange(event, value) {
    this.setValue(value);
    if (this.props.onChange) this.props.onChange(event, value);
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return !_lodash2['default'].isEqual(this.props, nextProps) || !_lodash2['default'].isEqual(this.state, nextState);
  }

};
module.exports = exports['default'];