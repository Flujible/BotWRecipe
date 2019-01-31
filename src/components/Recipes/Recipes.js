import React from 'react';
import PropTypes from 'prop-types';
import StyledRecipes from './Recipes.style';
import RecipeCard from '../RecipeCard/RecipeCard';

class Recipes extends React.Component {
	constructor(props) {
		super(props);
		this.state = { recipes: [] };
	}

	componentDidMount() {
		fetch('/api/recipes')
			.then(res => {
				return res.json();
			})
			.then(
				result => {
					this.setState(result);
				},
				error => {
					console.error(`oh shit, there was a problem: ${error}`); // eslint-disable-line
				},
			);
	}

	generateCards(recipesArr) {
		return recipesArr.map(({ name, effects, img, ingredients }) => {
			return (
				<RecipeCard
					key={name}
					attributes={effects}
					TitleText={name}
					imgSrc={img}
					ingredients={ingredients}
				/>
			);
		});
	}

	render() {
		const { recipes } = this.state;
		return <div>{this.generateCards(recipes)}</div>;
	}
}

export default Recipes;
