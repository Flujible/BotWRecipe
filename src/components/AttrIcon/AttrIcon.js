import React from 'react';
import PropTypes from 'prop-types';
import StyledAttrIcon from './AttrIcon.style.js'

const AttrIcon = ({src}) => {
  return <StyledAttrIcon src={src}/>;
}

AttrIcon.description = `
  Icons are used inside the Attribute component to provide a graphical representation of the attribute value.
  For example if a recipe gives 3 hearts then 3 AttrIcons should be rendered with a src image of a heart inside
  the Attribute component
  `

AttrIcon.propTypes = {
  /** Location of the image*/
  src: PropTypes.string.isRequired,
}

export default AttrIcon;
