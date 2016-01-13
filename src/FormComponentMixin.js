import React from 'react';

export default {

  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  handleValueChange: function (event, value) {
    this.setValue(value);
    if( this.props.onChange ) this.props.onChange(event, value);
  }

};
