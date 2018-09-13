import React from 'react';
import PropTypes from 'prop-types';
import {StyledAttribute, StyledFont} from './Attribute.style.js';

const Attribute = ({ title, value, type }) => {
  //create an array of ❤️ the same size of 'value'
  let string = '';
  for (var i = 0; i < value; i++) {
    string += '';
  }

  //Render 'string' alongside the value given
  return <StyledAttribute>{title}: <StyledFont>{string}</StyledFont></StyledAttribute>;
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
