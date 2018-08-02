import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

import '../src/base.css';

setDefaults({
  inline: true, // Displays info inline vs click button to view
});

const requireAll = context => context.keys().map(context)


function loadStories() {
  requireAll(require.context('../src/components/', true, /\.stories.js$/) )
}

configure(loadStories, module);
