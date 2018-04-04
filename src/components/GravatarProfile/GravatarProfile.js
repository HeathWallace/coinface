import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';

import './GravatarProfile.css';

const GravatarProfile = ({ email, gravStyle }) => (
	<div className="GravatarProfile">
		<img
			src={
				'https://www.gravatar.com/avatar/' +
				md5(email.trim().toLowerCase()) +
				'?d=' +
				gravStyle
			}
			alt=""
		/>
	</div>
);

GravatarProfile.description = `
Used as a visualisation of a customers Gravatar profile picture.
`;

GravatarProfile.propTypes = {
	/** email to show the profile of the customer */
	email: PropTypes.string.isRequired,
	/** gravatar style to be used to generate default gravatars. Options are mm, identicon, monsterid, wavatar, retro, robohash */
	gravStyle: PropTypes.string,
};

GravatarProfile.defaultProps = {
	gravStyle: '',
};

export default GravatarProfile;
