import React from 'react';
import PropTypes from 'prop-types';
import {
	StyledIngredientsList,
	StyledLi
} from './IngredientsList.style.js';
import NumberSelect from '../NumberSelect/NumberSelect';
import TextInput from '../TextInput/TextInput';

const IngredientsList = ({ ingredients, edit }) => {
	const listItems = edit
		? ingredients.map(ingredient => (
			<StyledLi key={ingredient.name}>
				<NumberSelect value={ingredient.quantity} min={1} max={5} />
				<TextInput value={ingredient.name} />
			</StyledLi>
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
