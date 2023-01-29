// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories\

// Button.stories.js|jsx

import React from 'react';
import App from './App';

export default {
  component: App,
};

export const Primary = () => <App primary />  // rendered in default state