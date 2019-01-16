import React from "react";
import { storiesOf, action, withInfo } from "../../stories";

import RecipeCard from "./RecipeCard";

const attributes = {
    "Health": 2.5,
    "Chilly": 3,
};
const buttonText = "Edit";
const buttonOnClick = action("clicked");
const headerText = "Pumpkin Stew";
const imgSrc = "http://botw-recipes.com/assets/images/stuff/recipes/10.png";
const ingredients = [
	{
		name: "Fresh milk",
		quantity: 1,
	},
	{
		name: "Tabantha wheat",
		quantity: 1,
	},
	{
		name: "Goat butter",
		quantity: 1,
	},
	{
		name: "Pumpkin",
		quantity: 1,
	},
];


storiesOf("RecipeCard", module)
    .addDecorator((story, context) => 
        withInfo(RecipeCard.description)(story)(context),
    )
    .add("Pimpkin Stew", () => <RecipeCard attributes={attributes} headerText={headerText} imgSrc={imgSrc} ingredients={ingredients} />);
