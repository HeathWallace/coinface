import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TrustSetting from '../../components/TrustSetting/TrustSetting';
import AddressInput from '../../components/AddressInput/AddressInput';
import Button from '../../components/Button/Button';

import { setWalletAddress, clearTransactions, getAllTransactions } from '../../actions';
import SettingsDrawer from '../../components/SettingsDrawer/SettingsDrawer';


const mapStateToProps = state => ({
	trustSettingValue: state.settings.trustConfirmationLevel,
	walletAddressValue: state.settings.walletAddress,
});

const mapDispatchToProps = dispatch => ({
	onSave: ({ walletAddress }) => {
		dispatch(setWalletAddress(walletAddress));
		dispatch(clearTransactions());
		dispatch(getAllTransactions());
	},
});

class ConnectedSettingsDrawer extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			trustLevel: '1',
			walletAddress: '0x5c3216a6d9fbd7cf2afbe9157ff7e7d1db3d7bed',
		};

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
				<TrustSetting labelText="Trust" value={trustLevel} onChange={this.createOnChangeHandler('trustLevel')}/>
				<AddressInput labelText='Address' value={walletAddress} onChange={this.createOnChangeHandler('walletAddress')}/>
				<Button variant='secondary' onClick={this.saveClickHandler}>Save</Button>
			</SettingsDrawer>
		);
	}

	saveClickHandler () {
		this.props.onSave(this.state);
	}
}
ConnectedSettingsDrawer.propTypes = {
	/*If the settings drawer is open or closes. */
	isOpen: PropTypes.bool.isRequired,

	/** A callback to fire when the close button is pressed */

	onClose: PropTypes.func,
	/** A function to be run when the save button is interacted with */
	onSave: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedSettingsDrawer);
