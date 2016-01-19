import React from 'react';
import _     from 'lodash';

export default {

  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  handleValueChange (event, value) {
    this.setValue(value);
    if( this.props.onChange ) this.props.onChange(event, value);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState);
  }

};
