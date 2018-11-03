import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Attribute from './Attribute';

storiesOf('Attribute', module)
  .addDecorator((story, context) => withInfo(Attribute.description)(story)(context))
  .add('Text based', () => (
    <Attribute
      title='Chilly'
      value={2}
      duration={(4*60)+30}
      ></Attribute>
  ));
