import React     from 'react';
import Formsy    from 'formsy-react';
import TextField from 'material-ui/lib/text-field';

export default React.createClass({
  mixins: [ Formsy.Mixin ],

  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string
  },

  handleChange(event) {
    this.setState({
      _value: event.currentTarget.value,
      _isPristine: false
    });

    if ( this.props.onChange ) { this.props.onChange(event) };
  },

  handleBlur(event) {
    if(this.getErrorMessage() != null){
      this.setValue(event.currentTarget.value);
    }
    else{
      if (this.isValidValue(event.target.value)) {
        this.setValue(event.target.value);
      }
      else{
        this.setState({
          _value: event.currentTarget.value,
          _isPristine: false
        });
      }
    }

    if ( this.props.onBlur ) { this.props.onBlur(event) };
  },

  render: function () {
    return (
      <TextField
        {...this.props}
        defaultValue={this.props.value}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        errorText={this.getErrorMessage()}
        value={this.getValue()} />
    );
  }
});