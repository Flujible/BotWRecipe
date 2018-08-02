import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import Image from './Image';

storiesOf('Image', module)
  .addDecorator((story, context) => withInfo(Image.description)(story)(context))
  .add('Standard', () => (
    <Image src="http://botw-recipes.com/assets/images/stuff/recipes/65.png"/>
  ));
