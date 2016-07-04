'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormsyCheckbox = _react2.default.createClass({
  displayName: 'FormsyCheckbox',


  propTypes: {
    defaultChecked: _react2.default.PropTypes.bool,
    name: _react2.default.PropTypes.string.isRequired,
    onChange: _react2.default.PropTypes.func
  },

  mixins: [_formsyReact2.default.Mixin],

  componentDidMount: function componentDidMount() {
    this.setValue(this.muiComponent.isChecked());
  },
  handleChange: function handleChange(event, value) {
    this.setValue(value);
    if (this.props.onChange) this.props.onChange(event, value);
  },


  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

  render: function render() {
    var _props = this.props;
    var defaultChecked = _props.defaultChecked;

    var rest = _objectWithoutProperties(_props, ['defaultChecked']);

    var value = this.getValue();

    if (typeof value === 'undefined') {
      value = typeof defaultChecked !== 'undefined' ? defaultChecked : false;
    }
    return _react2.default.createElement(_Checkbox2.default, _extends({}, rest, {
      checked: value,
      onCheck: this.handleChange,
      ref: this.setMuiComponentAndMaybeFocus
    }));
  }
});

exports.default = FormsyCheckbox;