/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import GravatarProfile from './GravatarProfile';

storiesOf('GravatarProfile', module)

	.addDecorator((story, context) => withInfo(GravatarProfile.description)(story)(context))

	.add('known user', () => (
		<GravatarProfile
			email='hazlan@gmail.com'
		/>
	))

	.add('unknown user', () => (
		<GravatarProfile
			email='giohsdhsn'
		/>
	))

	.add('unknown user with Gravatar style', () => (
		<GravatarProfile
			email='giohsdhsn'
			gravStyle='retro'
		/>
	))

	.add('empty user', () => (
		<GravatarProfile	/>
	));
