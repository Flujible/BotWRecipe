import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import TextInput from './TextInput';

storiesOf('Text input', module)
  .addDecorator((story, context) =>
    withInfo(TextInput.description)(story)(context),
  )
  .add('Standard', () => <TextInput />);
