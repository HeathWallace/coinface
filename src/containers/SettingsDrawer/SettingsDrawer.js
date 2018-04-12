import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import bindMethods from 'yaab';

import TrustSetting from '../../components/TrustSetting/TrustSetting';
import AddressInput from '../../components/AddressInput/AddressInput';
import Button from '../../components/Button/Button';

import {
	addWallet,
	setTrust,
	clearTransactions,
	getAllTransactions,
	addToken,
} from '../../actions';
import SettingsDrawer from '../../components/SettingsDrawer/SettingsDrawer';

const mapStateToProps = state => ({
	trustLevel: state.settings.trustLevel,
	walletAddress: state.settings.walletAddress,
	tokenAddress: state.settings.tokenAddress,
});

const mapDispatchToProps = dispatch => ({
	onSave: ({ walletAddress, trustLevel, tokenAddress }) => {
		dispatch(addWallet(walletAddress));
		dispatch(addToken(tokenAddress));
		dispatch(setTrust(trustLevel));
		dispatch(clearTransactions());
		dispatch(getAllTransactions());
	},
});

class ConnectedSettingsDrawer extends React.Component {
	static get propTypes() {
		return {
			isOpen: PropTypes.bool.isRequired,
			onClose: PropTypes.func,
			onSave: PropTypes.func,
			trustLevel: PropTypes.number,
			walletAddress: PropTypes.string.isRequired,
			tokenAddress: PropTypes.string.isRequired,
		};
	}

	constructor(props) {
		super(props);
		const { trustLevel, walletAddress, tokenAddress } = props;
		this.state = { trustLevel, walletAddress, tokenAddress };
		this.addressInputIsValid(walletAddress);
		this.addressInputIsValid(tokenAddress);
		bindMethods(this);
	}

	createOnChangeHandler(name) {
		return value =>
			this.setState({
				[name]: value,
			});
	}

	addressInputIsValid(value) {
		let walletAddressErrors = [];

		// check value isn't too long
		if (value.length > 42) {
			walletAddressErrors.push('Value is too long');
		}

		// check value starts with '0x'
		if (!value.match(/0x/)) {
			walletAddressErrors.push('Must start with 0x');
		}
		// check value is in hexadecimal
		if (!value.substr(2).match(/^[0-9a-fA-F]+$/)) {
			walletAddressErrors.push('Incorrect format');
		}

		return walletAddressErrors;
	}

	render() {
		const { isOpen, onClose } = this.props;
		const { trustLevel, walletAddress, tokenAddress } = this.state;
		const walletAddressErrors = this.addressInputIsValid(walletAddress);
		const tokenAddressErrors = this.addressInputIsValid(walletAddress);

		return (
			<SettingsDrawer isOpen={isOpen} onClose={onClose}>
				<h2>Settings</h2>
				<TrustSetting
					labelText="Trust"
					value={trustLevel}
					onChange={this.createOnChangeHandler('trustLevel')}
				/>
				<AddressInput
					labelText="Wallet Address"
					value={walletAddress}
					onChange={this.createOnChangeHandler('walletAddress')}
					isValid={walletAddressErrors.length > 0 ? false : true}
					errors={walletAddressErrors}
				/>
				<AddressInput
					labelText="Contract Address"
					value={tokenAddress}
					onChange={this.createOnChangeHandler('tokenAddress')}
					isValid={tokenAddressErrors.length > 0 ? false : true}
					errors={tokenAddressErrors}
				/>
				<Button variant="secondary" onClick={this.saveClickHandler}>
					Save
				</Button>
			</SettingsDrawer>
		);
	}

	saveClickHandler() {
		this.props.onSave(this.state);
		this.props.onClose();
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	ConnectedSettingsDrawer
);
