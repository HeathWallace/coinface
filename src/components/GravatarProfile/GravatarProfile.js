import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';

import './GravatarProfile.css';

const GravatarProfile = ({email, gravStyle}) => {
	let hash = email? md5(email.trim().toLowerCase()):'',
		opts = gravStyle? '?d='+gravStyle:'';
	return (
		<div className='GravatarProfile'>
			<img src={'https://www.gravatar.com/avatar/' + hash + opts} alt='Gravatar avatar'/>
		</div>
	);
}

GravatarProfile.description = `
Used as a visualisation of a customers Gravatar profile picture.
`;

GravatarProfile.propTypes = {
	/** email to show the profile of the customer or generate a default gravatar*/
	email: PropTypes.string.isRequired,
	/** style to generate default images. Options are mm, identicon, monsterid, wavatar, retro, robohash, blank */
	gravStyle: PropTypes.string,

};

export default GravatarProfile;
