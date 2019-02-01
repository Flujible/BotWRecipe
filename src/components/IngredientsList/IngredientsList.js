import React from 'react';
import PropTypes from 'prop-types';
import {
	StyledIngredientsList,
	StyledIngNameInput,
	StyledIngQuantInput,
} from './IngredientsList.style.js';

const IngredientsList = ({ ingredients, edit }) => {
	const listItems = edit
		? ingredients.map(ingredient => (
				<li key={ingredient.name}>
					<StyledIngQuantInput placeholder={ingredient.quantity} />
					<StyledIngNameInput placeholder={ingredient.name} />
				</li>
		  ))
		: ingredients.map(ingredient => (
				<li key={ingredient.name}>
					{ingredient.quantity} {ingredient.name}
				</li>
		  ));
	return (
		<div>
			Ingredients:
			<StyledIngredientsList>{listItems}</StyledIngredientsList>
		</div>
	);
};

IngredientsList.description = `
  The ingredients list is used to show the user which pieces of food
  from across Hyrule are needed for the given recipe
`;

IngredientsList.propTypes = {
	/** Array of the ingredients to be displayed */
	ingredients: PropTypes.array.isRequired,

	/** Depicts if component is rendered in edit mode */
	edit: PropTypes.bool,
};

export default IngredientsList;
