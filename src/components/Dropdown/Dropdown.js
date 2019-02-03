import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bindMethods from 'yaab';

import { StyledSelect, StyledOption } from './Dropdown.style';

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.selected || '',
		};
		bindMethods(this);
	}

	createOptions(options) {
		return options.map(option => (
			<StyledOption key={option} value={option}>
				{option}
			</StyledOption>
		));
	}

	handleChange(e) {
		this.setState({
			value: e.target.value,
		});
	}

	render() {
		return (
			<StyledSelect value={this.state.value} onChange={this.handleChange}>
				{this.createOptions(this.props.options)}
			</StyledSelect>
		);
	}
}

Dropdown.description = `
Simple drop down
`;

Dropdown.propTypes = {
	/** Options that will be available in the select */
	options: PropTypes.array,

	/** Option to be selected upon render */
	selected: PropTypes.string,
};

export default Dropdown;
