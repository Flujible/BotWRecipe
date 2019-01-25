import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Recipes from './Recipes';

storiesOf('Recipes', module)
	.addDecorator((story, context) =>
		withInfo(Recipes.description)(story)(context),
	)
	.add('Default', () => <Recipes />);
