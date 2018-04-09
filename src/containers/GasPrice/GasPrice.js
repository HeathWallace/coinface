import { connect } from 'react-redux';
import GasPrice from '../../components/GasPrice/GasPrice';

const mapStateToProps = state => ({
	recommendedPrice: state.gasPrice,
	unit: 'gwei',
});

export default connect(mapStateToProps)(GasPrice);
