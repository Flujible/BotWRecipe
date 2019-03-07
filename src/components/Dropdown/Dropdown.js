import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bindMethods from 'yaab';

import { StyledSelect, StyledOption, StyledLabel } from './Dropdown.style';
import { StyledInputWrapper } from '../NumberSelect/NumberSelect.style';

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
		const { id, name } = this.props;
		return (
			<StyledInputWrapper>
				<StyledLabel htmlFor={id}>{name}</StyledLabel>
				<StyledSelect
					value={this.state.value}
					onChange={this.handleChange}
					id={id}>
					{this.createOptions(this.props.options)}
				</StyledSelect>
			</StyledInputWrapper>
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

	/** Name of the input */
	name: PropTypes.string,

	/** Id to link the label with the input*/
	id: PropTypes.string,
};

export default Dropdown;
