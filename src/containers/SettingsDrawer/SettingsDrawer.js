import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TrustSetting from '../../components/TrustSetting/TrustSetting';
import AddressInput from '../../components/AddressInput/AddressInput';
import Button from '../../components/Button/Button';

import { updateSettings, clearTransactions, getAllTransactions } from '../../actions';
import SettingsDrawer from '../../components/SettingsDrawer/SettingsDrawer';


const mapStateToProps = state => ({
	trustLevel: state.settings.trustLevel,
	walletAddress: state.settings.walletAddress,
});

const mapDispatchToProps = dispatch => ({
	onSave: ({ walletAddress, trustLevel }) => {
		dispatch(updateSettings({walletAddress, trustLevel}));
		dispatch(clearTransactions());
		dispatch(getAllTransactions());
	},
});

class ConnectedSettingsDrawer extends React.Component {
	static get propTypes()  {
		return {
			isOpen: PropTypes.bool.isRequired,
			onClose: PropTypes.func,
			onSave: PropTypes.func,
			trustLevel: PropTypes.string,
			walletAddress: PropTypes.string.isRequired,
		};
	}

	constructor (props) {
		super(props);
		const { trustLevel, walletAddress } = props;
		this.state = {trustLevel, walletAddress};

		this.createOnChangeHandler = this.createOnChangeHandler.bind(this);
		this.saveClickHandler = this.saveClickHandler.bind(this);
	}

	createOnChangeHandler(name) {
		return value => this.setState({
			[name]: value,
		});
	}

	render () {
		const { isOpen, onClose } = this.props;
		const { trustLevel, walletAddress } = this.state;

		return(
			<SettingsDrawer
				isOpen={isOpen}
				onClose={onClose}
			>
				<h2>Settings</h2>
				<TrustSetting labelText='Trust' value={trustLevel} onChange={this.createOnChangeHandler('trustLevel')}/>
				<AddressInput labelText='Address' value={walletAddress} onChange={this.createOnChangeHandler('walletAddress')}/>
				<Button variant='secondary' onClick={this.saveClickHandler}>Save</Button>
			</SettingsDrawer>
		);
	}

	saveClickHandler () {
		this.props.onSave(this.state);
		this.props.onClose();
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedSettingsDrawer);
