import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import IngredientsList from './IngredientsList';

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

storiesOf('IngredientsList', module)
	.addDecorator((story, context) =>
		withInfo(IngredientsList.description)(story)(context),
	)
	.add('Standard', () => <IngredientsList ingredients={ingredients} />)
	.add('Edit mode', () => <IngredientsList ingredients={ingredients} edit />);
