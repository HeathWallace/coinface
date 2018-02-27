import React from 'react';
import PropTypes from 'prop-types';

import env from '../../utils/environment';

import SkypeProfile from '../SkypeProfile/SkypeProfile';
import FirstName from '../FirstName/FirstName';

class Identity extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'Unknown',
			name: 'Unknown',
		};
	}

	componentDidMount() {
		const url = env.REACT_APP_IDENTITY_RESOLVER;

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
