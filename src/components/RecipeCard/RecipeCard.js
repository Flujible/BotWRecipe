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
    const attributesList = [];
    
    attributesList.push(Object.keys(attributes));
        
        
        // <Attribute title={attr} value={attributes[attr]} />)
    console.log(attributesList)

    return (<StyledRecipeCard>
        <Header imgSrc={imgSrc}>{headerText}</Header>
        <div>
            {console.log(attributesList)}
        </div>
        <IngredientsList ingredients={ingredients} />
        <Button onClick={buttonOnClick}>{buttonText}</Button>
    </StyledRecipeCard>)
};

export default RecipeCard;
