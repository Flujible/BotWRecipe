import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Title from './Title';

storiesOf('Title', module)
	.addDecorator((story, context) =>
		withInfo(Title.description)(story)(context),
	)
	.add('Standard', () => (
		<Title
			imgSrc={
				'http://botw-recipes.com/assets/images/stuff/recipes/65.png'
			}>
			Pumpkin Stew
		</Title>
	))
	.add('Edit mode', () => (
		<Title
			imgSrc={
				'http://botw-recipes.com/assets/images/stuff/recipes/65.png'
			}
			edit>
			Pumpkin Stew
		</Title>
	));
