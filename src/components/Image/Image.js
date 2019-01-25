import React from 'react';
import PropTypes from 'prop-types';
import StyledImage from './Image.style.js';

const Image = ({ src }) => {
	return <StyledImage src={src} />;
};

Image.description = `
  Images are used to display the graphical representation of what the food item looks like once cooked.
  `;

Image.propTypes = {
	/** Location of the image*/
	src: PropTypes.string.isRequired,
};

export default Image;
