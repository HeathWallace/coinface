import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { configure as configureEnzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

setDefaults({
	inline: true, // Displays info inline vs click button to view
});

const req = require.context('../src/components', true, /\.story\.js$/)

const loadStories = () => {
	req.keys().forEach((filename) => req(filename))
};

configure(loadStories, module);
configureEnzyme({ adapter: new Adapter() });
