import React     from 'react';
import Formsy    from 'formsy-react';
import TextField from 'material-ui/lib/text-field';

export default React.createClass({
  mixins: [ Formsy.Mixin ],

  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string
  },

  handleChange: function handleChange(event) {
    if(this.getErrorMessage() != null){
      this.setValue(event.currentTarget.value);
      if ( this.props.onChange ) { this.props.onChange(event) };
    }
    else{
      if (this.isValidValue(event.target.value)) {
        this.setValue(event.target.value);
        if ( this.props.onChange ) { this.props.onChange(event) };
      }
      else{
        this.setState({
          _value: event.currentTarget.value,
          _isPristine: false
        });
      }
    }
  },

  handleBlur: function handleBlur(event) {
    this.setValue(event.currentTarget.value);
    if ( this.props.onBlur ) { this.props.onBlur(event) };
  },

  handleEnterKeyDown: function handleEnterKeyDown(event) {
    this.setValue(event.currentTarget.value);
    if ( this.props.onEnterKeyDown ) { this.props.onEnterKeyDown(event) };
  },

  render: function () {
    return (
      <TextField
        {...this.props}
        defaultValue={this.props.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onEnterKeyDown={this.handleEnterKeyDown}
        errorText={this.getErrorMessage()}
        value={this.getValue()} />
    );
  }
});