import React from 'react';
import PropTypes from 'prop-types';
import StyledIngredientsList from './IngredientsList.style.js'

const IngredientsList = ({ ingredients }) => {
  const ingredientsList = ingredients.map((ingredients) => {
    <li>{ingredient.quantity} {ingredient.name}</li>
  });
  return (
    <StyledIngredientsList>{ingredientsList}</StyledIngredientsList>
  );
}

IngredientsList.description = `
  The ingredients list is used to show the user which pieces of food
  from across Hyrule are needed for the given recipe
`

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
}

export default IngredientsList;

//TODO shouldnt be passing the ingredients data as a child, talk to Shaun
// or Dan about how best to achieve this

// {
//   "ingredients": [
//     {
//       "name": "pumpkin",
//       "quantity": 1
//     },
//     {
//       "name": "Raw gourmet meat",
//       "quantity": 1
//     }
//   ]
// }
