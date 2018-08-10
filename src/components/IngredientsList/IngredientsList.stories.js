import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import IngredientsList from './IngredientsList';

const ingredients = [
  {
    "name": "Pumpkin",
    "quantity": 1
  },
  {
    "name": "Raw gourmet meat",
    "quantity": 1
  }
];

storiesOf('IngredientsList', module)
  .addDecorator((story, context) => withInfo(IngredientsList.description)(story)(context))
  .add('Standard', () => (
    <IngredientsList ingredients={ingredients}></IngredientsList>
  ))
