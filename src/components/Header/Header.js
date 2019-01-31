import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledButton from '../Button/Button.style';
import StyledHeader from './Header.style';

const StyledHeaderContainer = styled.div`
	background-color: #fff;
	width: 100%;
	max-height: 100px;
	left: 0;
	top: 0;
	position: fixed;
	box-shadow: 0px 3px 5px 0px #ccc;
	text-align: center;

	${StyledButton} {
		float: right;
		margin: 10px;
		max-height: 65px;
		right: 0;
	}
`;

const Header = ({ children }) => (
	<StyledHeaderContainer>
		<StyledHeader>{children}</StyledHeader>
	</StyledHeaderContainer>
);

Header.propTypes = {
	children: PropTypes.string,
};

export default Header;
