import React from 'react';
import { storiesOf, withInfo, action } from '../../stories';

import SettingsDrawer from './SettingsDrawer';

import fixedPositionContainer from '../../utils/fixedPositionContainer';

storiesOf('SettingsDrawer')

	.addDecorator(fixedPositionContainer({ height: 600 }))

	.addDecorator((story, context) => withInfo(SettingsDrawer.description)(story)(context))

	.add('Open', () => (
		<SettingsDrawer isOpen={true} onClose={action('onClose')}>
			<ul>
				<li>Lorem ipsum dolor</li>
				<li>Lorem ipsum dolor</li>
				<li>Lorem ipsum dolor</li>
				<li>Lorem ipsum dolor</li>
			</ul>
		</SettingsDrawer>
	))

	.add('Closed', () => (
		<SettingsDrawer isOpen={false} onClose={action('onClose')}>
			<ul>
				<li>Lorem ipsum dolor</li>
				<li>Lorem ipsum dolor</li>
				<li>Lorem ipsum dolor</li>
				<li>Lorem ipsum dolor</li>
			</ul>
		</SettingsDrawer>
	));
