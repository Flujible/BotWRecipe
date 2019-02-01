import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage, StyledImageInput } from './Image.style.js';

const Image = ({ src, edit }) => {
	return edit ? (
		<StyledImageInput placeholder={src} />
	) : (
		<StyledImage src={src} />
	);
};

Image.description = `
  Images are used to display the graphical representation of what the food item looks like once cooked.
  `;

Image.propTypes = {
	/** Location of the image*/
	src: PropTypes.string.isRequired,

	/** Depicts if component is rendered in edit mode */
};

export default Image;
