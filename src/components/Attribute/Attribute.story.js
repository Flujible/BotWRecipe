import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Attribute from './Attribute';

storiesOf('Attribute', module)
	.addDecorator((story, context) =>
		withInfo(Attribute.description)(story)(context),
	)
	.add('Health', () => <Attribute title="Health" value={2.25} />)
	.add('Effect', () => (
		<Attribute title="Chilly" value={3} duration={4 * 60 + 30} />
	))
	.add('Edit mode', () => (
		<Attribute title="Chilly" value={3} duration={4 * 60 + 30} edit />
	));
