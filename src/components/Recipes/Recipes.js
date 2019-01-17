import React from "react";
import PropTypes from "prop-types";
import StyledRecipes from "./Recipes.style";
import RecipeCard from '../RecipeCard/RecipeCard';
import recipeJSON from '../../recipes';

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: recipeJSON.recipes,
        };
    }

    componentDidMount() {
    }

    generateCards(recipesArr) {
        return recipesArr.map(recipe => {
            console.log(recipe.imgSrc);
            return <RecipeCard attributes={recipe.effects} headerText={recipe.name} imgSrc={recipe.img} ingredients={recipe.ingredients}/>
        })
    }
        
    render() {
        const { recipes } = this.state;
        return (
            <div>
                {this.generateCards(recipes)}
            </div>
        )
    }
}

export default Recipes;
