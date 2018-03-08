import React from 'react';
import PropTypes from 'prop-types';

import './SkypeProfile.css';

const SkypeProfile = props => (
	<div className='SkypeProfile'>
		<img src={'https://api.skype.com/users/' + props.username + '/profile/avatar?size=s'} alt='Skype avatar' />
	</div>
);

SkypeProfile.description = `
Used as a visualisation of a customers Skype profile picture.
`;

SkypeProfile.propTypes = {
	/** unique username for to show the profile of the customer */
	username: PropTypes.string.isRequired,

};

export default SkypeProfile;
