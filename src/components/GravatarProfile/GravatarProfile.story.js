/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import GravatarProfile from './GravatarProfile';

storiesOf('GravatarProfile', module)

	.addDecorator((story, context) => withInfo(GravatarProfile.description)(story)(context))

	.add('known user', () => (
		<GravatarProfile
			email='testmailshere@gmail.com'
		/>
	))

	.add('unknown user', () => (
		<GravatarProfile
			email='foobarman'
		/>
	))

	.add('unknown user with retro gravatar style', () => (
		<GravatarProfile
			email='foobarman'
			gravStyle='retro'
		/>
	));
