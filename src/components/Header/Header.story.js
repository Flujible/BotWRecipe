import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import Header from './Header';

storiesOf('Header', module)
	.addDecorator((story, context) =>
		withInfo(Header.description)(story)(context),
	)
	.add('Standard', () => (
		<div>
			<Header>Recipes of the wilD</Header>
		</div>
	));
