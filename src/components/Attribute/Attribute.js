import React from 'react';
import PropTypes from 'prop-types';
import {StyledAttribute, StyledFont, StyledIconPart} from './Attribute.style.js';
import icons from '../../libs/icons.js'

//This only returns 1 icon, not the number needed
const getContent = (title, value) => {
  const length = icons[title].icon.length - 1;
  let content = [];
  for (let i = 0; i < value; i++) {
    icons[title].icon.map((key, index) => {
      if (index === 0) {
        content.push(<StyledIconPart title={title} first={true}>{key}</StyledIconPart>);
      } else if (index === length) {
        content.push(<StyledIconPart title={title} final={true}>{key}</StyledIconPart>);
      } else {
        content.push(<StyledIconPart>{key}</StyledIconPart>);
      }
    });
  };
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
  title: PropTypes.oneOf(AttrCategories).isRequired,

  /** The numerical amount of effect that the attribute offers e.g. if a recipe
  heals Link for 2 hearts this value should be 2 ❤️❤️*/
  value: PropTypes.number.isRequired,
}


export default Attribute;
