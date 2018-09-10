import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import AttrIcon from './AttrIcon';

storiesOf('Attribute Icon', module)
  .addDecorator((story, context) => withInfo(Image.description)(story)(context))
  .add('Standard', () => (
    <AttrIcon src={require("../../assets/images/heart.png")}/>
  ));
