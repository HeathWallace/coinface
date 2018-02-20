import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import SettingsDrawer from './SettingsDrawer';

import './reset-fixed.css';

storiesOf('SettingsDrawer')

	.addDecorator((story, context) => withInfo(SettingsDrawer.description)(story)(context))

	.add('Static', () => (
		<div className="reset-fixed">
			<SettingsDrawer isOpen>
				<ul>
					<li>Lorem ipsum dolor</li>
					<li>Lorem ipsum dolor</li>
					<li>Lorem ipsum dolor</li>
					<li>Lorem ipsum dolor</li>
				</ul>
			</SettingsDrawer>
		</div>
	));
