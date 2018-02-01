import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
	inline: true, // Displays info inline vs click button to view
});

const req = require.context('../src/components', true, /\.story\.js$/)

const loadStories = () => {
	req.keys().forEach((filename) => req(filename))
};

configure(loadStories, module);
