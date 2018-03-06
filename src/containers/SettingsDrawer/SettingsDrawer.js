import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TrustSetting from '../../components/TrustSetting/TrustSetting';
import AddressInput from '../../components/AddressInput/AddressInput';
import Button from '../../components/Button/Button';

import { setWalletAddress, clearTransactions, getAllTransactions } from '../../actions';
import SettingsDrawer from '../../components/SettingsDrawer/SettingsDrawer';


const mapStateToProps = state => ({
	trustSetting: state.settings.trustConfirmationLevel,
	walletAddress: state.settings.walletAddress,
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
		const { trustSetting, walletAddress } = props;
		this.state = {trustSetting, walletAddress};

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
		const { trustSetting, walletAddress } = this.state;

		return(
			<SettingsDrawer
				isOpen={isOpen}
				onClose={onClose}
			>
				<h2>Settings</h2>
				<TrustSetting labelText="Trust" value={trustSetting} onChange={this.createOnChangeHandler('trustLevel')}/>
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
ConnectedSettingsDrawer.propTypes = {
	/*If the settings drawer is open or closes. */
	isOpen: PropTypes.bool.isRequired,

	/** A callback to fire when the close button is pressed */
	onClose: PropTypes.func,

	/** A function to be run when the save button is interacted with */
	onSave: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedSettingsDrawer);
