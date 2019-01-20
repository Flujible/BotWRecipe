import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "../Image/Image";

const TitleDiv = styled.div`
	border-bottom: solid;
	border-width: 1px;
	padding-bottom: 15px;
`;

const StyledTitle = styled.h2`
	font-family: TheWildBreathOfZelda, Arial, sans-serif;
	font-size: 3em;
	display: inline-block;
	margin: 0 0 0 20px;
`;

const Title = ({ imgSrc, children }) => (
	<TitleDiv>
		<Image src={imgSrc} />
		<StyledTitle>{children}</StyledTitle>
	</TitleDiv>
);

Title.description = `
  Titles are used to title a recipe with its given name from the game.
  `;
Title.propTypes = {
	/** Text that appears in the title*/
	children: PropTypes.string.isRequired,
};

Title.displayName = "Title";

export default Title;
