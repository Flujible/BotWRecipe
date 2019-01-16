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
    const attributesList = Object.keys(attributes);

    const getAttr = (attributesList => attributesList.map(attrKey =>         
            <Attribute title={attrKey} value={attributes[attrKey]} />
        ));

    const attr = getAttr(attributesList);

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
