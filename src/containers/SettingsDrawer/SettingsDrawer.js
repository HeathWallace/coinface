import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TrustSetting from '../../components/TrustSetting/TrustSetting';
import AddressInput from '../../components/AddressInput/AddressInput';
import Button from '../../components/Button/Button';

import { updateSettings, clearTransactions, getAllTransactions } from '../../actions';
import SettingsDrawer from '../../components/SettingsDrawer/SettingsDrawer';


const mapStateToProps = state => ({
	trustSetting: state.settings.trustConfirmationLevel,
	walletAddress: state.settings.walletAddress,
});

const mapDispatchToProps = dispatch => ({
	onSave: ({ walletAddress, trustSetting }) => {
		dispatch(updateSettings({walletAddress, trustSetting}));
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
			trustSetting: PropTypes.string,
			walletAddress: PropTypes.string.isRequired,
		};
	}

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


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedSettingsDrawer);
