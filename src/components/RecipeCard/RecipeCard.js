import React from "react";
import PropTypes from "prop-types";
import StyledRecipeCard from "./RecipeCard.style";
import Attribute from "../Attribute/Attribute";
import Button from "../Button/Button";
import Header from "../Header/Header";
import IngredientsList from "../IngredientsList/IngredientsList";

const RecipeCard = ({
	attributes,
	buttonText,
	buttonOnClick,
	headerText,
	imgSrc,
	ingredients,
}) => {
    
    const attr = attributes.map(attr => {
        return attr.duration ? 
        <Attribute title={attr.name} value={attr.value} duration={attr.duration}/>
        : <Attribute title={attr.name} value={attr.value} />
    });

    return (<StyledRecipeCard>
        <Header imgSrc={imgSrc}>{headerText}</Header>
        <div>
            {attr}
        </div>
        <IngredientsList ingredients={ingredients} />
        { (buttonText && buttonOnClick) && 
            <Button onClick={buttonOnClick}>{buttonText}</Button>}
    </StyledRecipeCard>)
};

export default RecipeCard;
