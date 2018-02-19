/* global process */
import React from 'react';
import PropTypes from 'prop-types';
import SkypeProfile from '../SkypeProfile/SkypeProfile';
import FirstName from '../FirstName/FirstName';

const envError = `
process.env.REACT_APP_IDENTITY_RESOLVER is unset.
Create the .env file to set this variable locally for development.
This should point the identity resolver URL to an identity API.
`;

class Identity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'Unknown',
			name: 'Unknown',
		};
	}

	componentDidMount() {
		const { REACT_APP_IDENTITY_RESOLVER: url } = process.env;
		if (!url) throw new Error(envError);

		const { address } = this.props;

		fetch(`${url}/search/?address=${address}`)
			.then(response => response.json())
			.then(([ user ]) => {
				if (user) {
					const { username, name } = user;

					this.setState({ username, name });
				}
			});
	}

	render() {
		return (
			<div className="Identity">
				<SkypeProfile
					username={this.state.username}
				/>
				<FirstName name={this.state.name}></FirstName>
			</div>
		);
	}
}

Identity.description = `
A container to show profile picture and first name of the owner of a given address.
`;

Identity.propTypes = {
	/** Valid Ethereum address of a user whose identity will be shown. */
	address: PropTypes.string.isRequired,
};

export default Identity;
