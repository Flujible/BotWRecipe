import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import Dropdown from './Dropdown';

const options = [
	'Health',
	'Electro',
	'Hasty',
	'Spicy',
	'Chilly',
	'Mighty',
	'Hearty',
	'Energizing',
	'Enduring',
	'Tough',
	'Sneaky',
	'Fireproof',
];

storiesOf('Dropdown', module)
	.addDecorator((story, context) =>
		withInfo(Dropdown.description)(story)(context),
	)
	.add('Standard', () => <Dropdown options={options} selected="Chilly" />);
