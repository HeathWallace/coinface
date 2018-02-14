import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import SettingsWheel from './SettingsWheel';

storiesOf('SettingsWheel')

	.addDecorator((story, context) => withInfo(SettingsWheel.description)(story)(context))

	.add('Static', () => (
		<SettingsWheel onClick={action('Clicked')}/>

	));
