import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledRecipeCard from './RecipeCard.style';
import Attribute from '../Attribute/Attribute';
import Button from '../Button/Button';
import Title from '../Title/Title';
import IngredientsList from '../IngredientsList/IngredientsList';
import bindMethods from 'yaab';

class RecipeCard extends Component {
	constructor(props) {
		super(props);
		bindMethods(this);
		this.state = {
			edit: false,
			attributes: this.props.attribute || [],
			titleText: this.props.titleText || '',
			imgSrc: this.props.imgSrc || '',
			ingredients: this.props.ingredients || [],
		}
	}

	onEditToggle(e) {
		this.setState(prevState => ({edit: !prevState.edit}))
		console.log(this.state.edit);
	}

	createAttr = attributes =>
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

		render() {
			const { imgSrc, titleText, attributes, ingredients, edit} = this.state;
			const { editAllowed } = this.props;
			return ( edit ?
				<StyledRecipeCard>
					<Title  edit imgSrc={imgSrc}>{titleText}</Title>
					{attributes && <div>{this.createAttr(attributes)}</div>}
					<IngredientsList edit ingredients={ingredients} />
					{editAllowed && (
						<Button onClick={this.onEditToggle}>{!this.state.edit ? "Edit" : "Save"}</Button>
					)}
				</StyledRecipeCard> :
				<StyledRecipeCard>
					<Title imgSrc={imgSrc}>{titleText}</Title>
					{attributes && <div>{this.createAttr(attributes)}</div>}
					<IngredientsList ingredients={ingredients} />
					{editAllowed && (
						<Button onClick={this.onEditToggle}>{!this.state.edit ? "Edit" : "Save"}</Button>
					)}
				</StyledRecipeCard>
			);
		}
}

RecipeCard.propTypes = {
	attributes: PropTypes.array,
	titleText: PropTypes.string,
	imgSrc: PropTypes.string,
	ingredients: PropTypes.array,
};

export default RecipeCard;
