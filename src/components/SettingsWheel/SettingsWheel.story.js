/* global module */
import React from 'react';
import { storiesOf, action, withInfo } from '../../stories';

import SettingsWheel from './SettingsWheel';

storiesOf('SettingsWheel', module)

	.addDecorator((story, context) => withInfo(SettingsWheel.description)(story)(context))

	.add('Static', () => (
		<SettingsWheel onClick={action('onClick')}/>
	));
