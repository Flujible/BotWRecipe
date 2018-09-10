import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Attribute from './Attribute';

storiesOf('Attribute', module)
  .addDecorator((story, context) => withInfo(Attribute.description)(story)(context))
  .add('Text based', () => (
    <Attribute
      title='Health'
<<<<<<< HEAD
      value={5}
      ></Attribute>
=======
      value='3'
      />
>>>>>>> de156e7a646917bb7c744d3421cb6581c39bdd3b
  ));
