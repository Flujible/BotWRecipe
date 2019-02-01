import React from 'react';
import PropTypes from 'prop-types';
import Image, { ImageInput } from '../Image/Image';
import { TitleDiv, StyledTitleInput, StyledTitle } from './Title.style';

const Title = ({ imgSrc, children, edit }) => {
	return edit ? (
		<TitleDiv>
			<Image edit src={imgSrc} />
			<StyledTitleInput placeholder={children} />
		</TitleDiv>
	) : (
		<TitleDiv>
			<Image src={imgSrc} />
			<StyledTitle>{children}</StyledTitle>
		</TitleDiv>
	);
};

Title.description = `
  Titles are used to title a recipe with its given name from the game.
  `;
Title.propTypes = {
	/** Text that appears in the title*/
	children: PropTypes.string.isRequired,

	/** Path to img to be used alongside the title */
	imgSrc: PropTypes.string,

	/** Depicts if component is rendered in edit mode */
	edit: PropTypes.bool,
};

Title.displayName = 'Title';

export default Title;
