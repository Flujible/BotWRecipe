import React from "react";
import PropTypes from "prop-types";
import StyledRecipes from "./Recipes.style";
import RecipeCard from '../RecipeCard/RecipeCard';

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipes: []};
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/recipes")
            .then(res => {
                return res.json()})
            .then(result => {
                this.setState(result)
            },
            (error) => {
                console.log("oh shit, there was a problem")
            });
    }

    generateCards(recipesArr) {
        return recipesArr.map(recipe => {
            return <RecipeCard attributes={recipe.effects} TitleText={recipe.name} imgSrc={recipe.img} ingredients={recipe.ingredients}/>
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
