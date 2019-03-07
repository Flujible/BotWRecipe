import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bindMethods from 'yaab';
import { StyledInput } from './TextInput.style';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
    }
    bindMethods(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { value } = this.props;
    return <StyledInput type="text" value={value} />
  }
}

export default TextInput;