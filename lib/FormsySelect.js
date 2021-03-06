'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _SelectField = require('material-ui-express/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormsySelect = _react2.default.createClass({
  displayName: 'FormsySelect',


  propTypes: {
    children: _react2.default.PropTypes.node,
    name: _react2.default.PropTypes.string.isRequired,
    onChange: _react2.default.PropTypes.func,
    value: _react2.default.PropTypes.any
  },

  mixins: [_formsyReact2.default.Mixin],

  getInitialState: function getInitialState() {
    return {
      hasChanged: false
    };
  },
  handleChange: function handleChange(event, index, value) {
    this.setValue(value);

    this.setState({
      hasChanged: value !== ''
    });

    if (this.props.onChange) this.props.onChange(event, index, value);
  },


  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

  render: function render() {
    var _props = this.props;
    var value = _props.value;

    var rest = _objectWithoutProperties(_props, ['value']);

    value = this.state.hasChanged ? this.getValue() : value;

    return _react2.default.createElement(
      _SelectField2.default,
      _extends({}, rest, {
        errorText: this.getErrorMessage(),
        onChange: this.handleChange,
        ref: this.setMuiComponentAndMaybeFocus,
        value: value
      }),
      this.props.children
    );
  }
});

exports.default = FormsySelect;