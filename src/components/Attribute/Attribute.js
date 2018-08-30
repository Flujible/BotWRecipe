import React from 'react';
import PropTypes from 'prop-types';
import StyledAttribute from './Attribute.style.js';

// Component should render {value} number of {src} after 'title:' 

const Attribute = ({ title, value, src }) => {
  return <StyledAttribute
            title={title}
            value={value}>{title}: {value}</StyledAttribute>;
}

Attribute.description = `
  Attributes are used to show what a food item provides for Link once eaten, for
  example 2 hearts of health or medium shock resistance
`

Attribute.propTypes = {
  /** The main text of the attribute to show e.g. 'Health:' or 'Effect:'*/
  title: PropTypes.string.isRequired,

  /** The numerical amount of effect that the attribute offers e.g. if a recipe
  heals Link for 2 hearts this value should be 2*/
  value: PropTypes.number.isRequired,
}


export default Attribute;
