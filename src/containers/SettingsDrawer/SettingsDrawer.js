import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import bindMethods from 'yaab';

import TrustSetting from '../../components/TrustSetting/TrustSetting';
import AddressInput from '../../components/AddressInput/AddressInput';
import Button from '../../components/Button/Button';

import { addWallet, setTrust, clearTransactions, getAllTransactions } from '../../actions';
import SettingsDrawer from '../../components/SettingsDrawer/SettingsDrawer';

const mapStateToProps = state => ({
	trustLevel: state.settings.trustLevel,
	walletAddress: state.settings.walletAddress,
});

const mapDispatchToProps = dispatch => ({
	onSave: ({ walletAddress, trustLevel }) => {
		dispatch(addWallet(walletAddress));
		dispatch(setTrust(trustLevel));
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
			trustLevel: PropTypes.number,
			walletAddress: PropTypes.string.isRequired,
		};
	}

	constructor (props) {
		super(props);
		const { trustLevel, walletAddress } = props;
		this.state = {trustLevel, walletAddress};
		this.addressInputIsValid(walletAddress);
		bindMethods(this);
	}

	createOnChangeHandler(name) {
		return value => this.setState({
			[name]: value,
		});
	}

	addressInputIsValid(value) {
		let walletAddressErrors = [];

		// check value isn't too long
		if(value.length > 42) {
			walletAddressErrors.push('Value is too long');
		}

		// check value starts with '0x'
		if(!value.match(/0x/)) {
			walletAddressErrors.push('Must start with 0x');
		}
		// check value is in hexadecimal
		if(!value.substr(2).match(/^[0-9a-fA-F]+$/)) {
			walletAddressErrors.push('Incorrect format');
		}

		return walletAddressErrors;
	}

	render () {
		const { isOpen, onClose } = this.props;
		const { trustLevel, walletAddress } = this.state;
		const walletAddressErrors = this.addressInputIsValid(walletAddress);

		return(
			<SettingsDrawer
				isOpen={isOpen}
				onClose={onClose}
			>
				<h2>Settings</h2>
				<TrustSetting
					labelText='Trust'
					value={trustLevel}
					onChange={this.createOnChangeHandler('trustLevel')}
				/>
				<AddressInput
					labelText='Address' value={walletAddress}
					onChange={this.createOnChangeHandler('walletAddress')}
					isValid={walletAddressErrors.length > 0 ? false : true}
					errors={walletAddressErrors}
				/>
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
