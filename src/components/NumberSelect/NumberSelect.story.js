import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import NumberSelect from './NumberSelect';

storiesOf('NumberSelect', module)
	.addDecorator((story, context) =>
		withInfo(NumberSelect.description)(story)(context),
	)
	.add('Standard', () => <NumberSelect max={750} min={0} name="Test" />);
