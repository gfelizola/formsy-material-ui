'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _RadioButton = require('material-ui-express/RadioButton');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormsyRadioGroup = _react2.default.createClass({
  displayName: 'FormsyRadioGroup',


  propTypes: {
    children: _react2.default.PropTypes.node,
    name: _react2.default.PropTypes.string.isRequired,
    onChange: _react2.default.PropTypes.func
  },

  mixins: [_formsyReact2.default.Mixin],

  componentDidMount: function componentDidMount() {
    this.setValue(this.muiComponent.getSelectedValue());
  },
  handleValueChange: function handleValueChange(event, value) {
    this.setValue(value);
    if (this.props.onChange) this.props.onChange(event, value);
  },


  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

  render: function render() {
    return _react2.default.createElement(
      _RadioButton.RadioButtonGroup,
      _extends({}, this.props, {
        ref: this.setMuiComponentAndMaybeFocus,
        onChange: this.handleValueChange
      }),
      this.props.children
    );
  }
});

exports.default = FormsyRadioGroup;