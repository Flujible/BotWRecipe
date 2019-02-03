import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bindMethods from 'yaab';

import StyledInput from './NumberSelect.style';

class NumberSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value || '',
		};
		bindMethods(this);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value,
		});
	}

	render() {
		const { max, min } = this.props;
		return (
			<StyledInput
				type="number"
				value={this.state.value}
				onChange={this.handleChange}
				max={max}
				min={min}
			/>
		);
	}
}

NumberSelect.description = `
Simple number select down
`;

NumberSelect.propTypes = {
	/** Value to be selected upon render */
	value: PropTypes.number,

	/** Maximum value the input can be set to */
	max: PropTypes.number,

	/** Minimum value the input can be set to */
	min: PropTypes.number,
};

export default NumberSelect;
