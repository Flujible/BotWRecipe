import React from "react";
import PropTypes from "prop-types";
import StyledRecipeCard from "./RecipeCard.style";
import Attribute from "./Attribute/Attribute";
import Button from "./Button/Button";
import Header from "./Header/Header";
import Image from "./Image/Image";
import IngredientsList from "./IngredientsList/IngredientsList";

const RecipeCard = ({
	attributes,
	buttonText,
	buttonOnClick,
	headerText,
	imgSrc,
	ingredients,
}) => {
    const attributesList = attributes.map(attribute => {
        <Attribute title={attribute.title} value={attribute.value} />
    }) 
    return <StyledRecipeCard>
        <Image src={imgSrc} />
        <Header>{headerText}</Header>
        {attributesList}
        <IngredientsList ingredients={ingredients} />
        <Button onClick={buttonOnClick}>{buttonText}</Button>
    </StyledRecipeCard>
};
