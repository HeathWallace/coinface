import React from 'react';
import { storiesOf, withInfo, action } from '../../stories';

import SettingsDrawer from './SettingsDrawer';

import './reset-fixed.css';

storiesOf('SettingsDrawer')

	.addDecorator((story, context) => withInfo(SettingsDrawer.description)(story)(context))

	.add('Open', () => (
		<div className="reset-fixed">
			<SettingsDrawer isOpen={true} onClose={action('onClose')}>
				<ul>
					<li>Lorem ipsum dolor</li>
					<li>Lorem ipsum dolor</li>
					<li>Lorem ipsum dolor</li>
					<li>Lorem ipsum dolor</li>
				</ul>
			</SettingsDrawer>
		</div>
	))

	.add('Closed', () => (
		<div className="reset-fixed">
			<SettingsDrawer isOpen={false} onClose={action('onClose')}>
				<ul>
					<li>Lorem ipsum dolor</li>
					<li>Lorem ipsum dolor</li>
					<li>Lorem ipsum dolor</li>
					<li>Lorem ipsum dolor</li>
				</ul>
			</SettingsDrawer>
		</div>
	));
