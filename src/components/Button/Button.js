import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style.js';

const Button = ({ children, onClick }) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.description = `
  A simple button to be used for basic functionality e.g. edit.
`;

Button.propTypes = {
	/** Text that will appear inside the button*/
	children: PropTypes.string.isRequired,
};

export default Button;
