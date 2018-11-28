import React from "react";
import PropTypes from "prop-types";
import StyledIngredientsList from "./IngredientsList.style.js";

const IngredientsList = ({ ingredients }) => {
	const listItems = ingredients.map(ingredient => (
		<li key={ingredient.name}>
			{ingredient.quantity} {ingredient.name}
		</li>
	));
	return <StyledIngredientsList>{listItems}</StyledIngredientsList>;
};

IngredientsList.description = `
  The ingredients list is used to show the user which pieces of food
  from across Hyrule are needed for the given recipe
`;

IngredientsList.propTypes = {
	ingredients: PropTypes.array.isRequired,
};

export default IngredientsList;
