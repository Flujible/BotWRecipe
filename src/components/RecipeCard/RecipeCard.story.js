import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import RecipeCard from './RecipeCard';

const attributes = [
	{
		name: 'Health',
		value: 2.75,
	},
	{
		name: 'Chilly',
		value: 5,
		duration: '120',
	},
];
const buttonText = 'Edit';
const buttonOnClick = action('clicked');
const TitleText = 'Pumpkin Stew';
const imgSrc = 'http://botw-recipes.com/assets/images/stuff/recipes/10.png';
const ingredients = [
	{
		name: 'Fresh milk',
		quantity: 1,
	},
	{
		name: 'Tabantha wheat',
		quantity: 1,
	},
	{
		name: 'Goat butter',
		quantity: 1,
	},
	{
		name: 'Pumpkin',
		quantity: 1,
	},
];

storiesOf('RecipeCard', module)
	.addDecorator((story, context) =>
		withInfo(RecipeCard.description)(story)(context),
	)
	.add('Default', () => (
		<RecipeCard
			attributes={attributes}
			TitleText={TitleText}
			imgSrc={imgSrc}
			ingredients={ingredients}
		/>
	))
	.add('With buttons', () => (
		<RecipeCard
			attributes={attributes}
			TitleText={TitleText}
			imgSrc={imgSrc}
			ingredients={ingredients}
			editAllowed
		/>
	));
