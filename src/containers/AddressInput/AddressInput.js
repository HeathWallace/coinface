import { connect } from 'react-redux';
import { setWalletAddress } from '../../actions';
import AddressInput from '../../components/AddressInput/AddressInput';

const mapStateToProps = state => ({
	value: state.settings.walletAddress,
});

const mapDispatchToProps = dispatch => ({
	onChange: newValue => dispatch(setWalletAddress(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressInput);
