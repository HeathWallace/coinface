import React from 'react';
import PropTypes from 'prop-types';

import './SettingsDrawer.css';

class SettingsDrawer extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			isOpen: props.isOpen,
		};

	}

	handleClick(event) {
		event.preventDefault();

		this.setState({isOpen: false});
	}

	render() {
		return (
			<div className={`SettingsDrawer ${this.state.isOpen ? 'is-open' : 'is-closed'}`}>
				{this.props.children}
				<button type="button" className="close-button" onClick={this.handleClick}>
					{this.props.closeButtonText}
				</button>
			</div>
		);
	}
}

SettingsDrawer.description = `
A container for settings inputs which renders over the top of the header and transaction list.
`;

SettingsDrawer.defaultProps = {
	isOpen: false,
	closeButtonText: 'Close settings',
};

SettingsDrawer.propTypes = {
	/** The contents of the settings drawer. */
	children: PropTypes.object.isRequired,

	/** If the settings drawer is open or closed. */
	isOpen: PropTypes.bool,

	/** Text for the close drawer button */
	closeButtonText: PropTypes.string,
};

export default SettingsDrawer;
