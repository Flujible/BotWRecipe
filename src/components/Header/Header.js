import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Header = styled.h2`
	font-family: TheWildBreathOfZelda, Arial, sans-serif;
	font-size: 3em;
	border-bottom: solid;
	border-width: 1px;
	padding-bottom: 15px;
`;

Header.description = `
  Headers are used to title a recipe with its given name from the game.
  `;
Header.propTypes = {
	/** Text that appears in the title*/
	children: PropTypes.string.isRequired,
};

Header.displayName = "Header";

export default Header;
