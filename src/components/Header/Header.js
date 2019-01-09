import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "../Image/Image";

const HeaderDiv = styled.div`
	border-bottom: solid;
	border-width: 1px;
	padding-bottom: 15px;
`;

const StyledHeader = styled.h2`
	font-family: TheWildBreathOfZelda, Arial, sans-serif;
	font-size: 3em;
	display: inline-block;
	margin: 0 0 0 20px;
`;

const Header = ({ imgSrc, children }) => (
	<HeaderDiv>
		<Image src={imgSrc} />
		<StyledHeader>{children}</StyledHeader>
	</HeaderDiv>
);

Header.description = `
  Headers are used to title a recipe with its given name from the game.
  `;
Header.propTypes = {
	/** Text that appears in the title*/
	children: PropTypes.string.isRequired,
};

Header.displayName = "Header";

export default Header;
