import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Attribute from './Attribute';

storiesOf('Attribute', module)
  .addDecorator((story, context) => withInfo(Attribute.description)(story)(context))
  .add('Image based', () => (
    <Attribute
      title='Health'
      value='3'
      ></Attribute>
  ));
