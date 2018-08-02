import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Header from './Header';

storiesOf('Header', module)
  .addDecorator((story, context) => withInfo(Header.description)(story)(context))
	.add('Standard', () => (
		<Header>Meat-stuffed pumpkin</Header>
	));
