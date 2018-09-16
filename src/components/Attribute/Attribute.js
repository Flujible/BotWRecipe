import React from 'react';
import PropTypes from 'prop-types';
import {StyledAttribute, StyledFont, StyledIconPart} from './Attribute.style.js';
import icons from '../../libs/icons.js'

//This only returns 1 icon, not the number needed
const getContent = (title, value) => {
  const length = icons[title].icon.length - 1;
  let content = icons[title].icon.map((key, index) => {
    if (index === 0) {
      return key;
    } else if (index === length) {
      return <StyledIconPart title={title} final={true}>{key}</StyledIconPart>
    } else {
      return (<StyledIconPart>{key}</StyledIconPart>);
    }
  });
  return content;
};

const Attribute = ({ title, value }) => {
  //Render 'string' alongside the value given
  return <StyledAttribute>{title}: <StyledFont title={title}>{getContent(title, value)}</StyledFont></StyledAttribute>;
}

Attribute.description = `
  Attributes are used to show what a food item provides for Link once eaten, for
  example 2 hearts of health or medium shock resistance
`;

const AttrCategories = [
  'Health',
  'Electro',
  'Hasty',
  'Spicy',
  'Chilly',
  'Mighty',
  'Hearty',
  'Energizing',
  'Enduring',
  'Tough',
  'Sneaky',
  'Fireproof',
];

Attribute.propTypes = {
  /** The main text of the attribute to show e.g. 'Health:' or 'Effect:'*/
  title: PropTypes.string.isRequired,

  /** The numerical amount of effect that the attribute offers e.g. if a recipe
  heals Link for 2 hearts this value should be 2 ❤️❤️*/
  value: PropTypes.oneOf(AttrCategories).isRequired,
}


export default Attribute;
