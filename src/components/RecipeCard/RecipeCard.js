import React from 'react';
import PropTypes from 'prop-types';
import StyledRecipeCard from './RecipeCard.style';
import Attribute from '../Attribute/Attribute';
import Button from '../Button/Button';
import Title from '../Title/Title';
import IngredientsList from '../IngredientsList/IngredientsList';

const RecipeCard = ({
	attributes,
	buttonText,
	buttonOnClick,
	TitleText,
	imgSrc,
	ingredients,
}) => {
	const createAttr = attributes =>
		attributes.map(attr => {
			return attr.duration ? (
				<Attribute
					title={attr.name}
					value={attr.value}
					duration={attr.duration}
				/>
			) : (
				<Attribute title={attr.name} value={attr.value} />
			);
		});

	return (
		<StyledRecipeCard>
			<Title imgSrc={imgSrc}>{TitleText}</Title>
			{attributes && <div>{createAttr(attributes)}</div>}
			<IngredientsList ingredients={ingredients} />
			{buttonText && buttonOnClick && (
				<Button onClick={buttonOnClick}>{buttonText}</Button>
			)}
		</StyledRecipeCard>
	);
};

RecipeCard.propTypes = {
	attributes: PropTypes.array,
	buttonText: PropTypes.string,
	buttonOnClick: PropTypes.function,
	TitleText: PropTypes.string,
	imgSrc: PropTypes.string,
	ingredients: PropTypes.array,
};

export default RecipeCard;
