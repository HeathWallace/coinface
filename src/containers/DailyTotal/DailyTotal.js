import { connect } from 'react-redux';
import env from '../../utils/environment';
import DailyTotal from '../../components/DailyTotal/DailyTotal';

const mapStateToProps = state => ({
	total: Object.keys(state.transactions)
		.map(hash => ({ hash, ...state.transactions[hash]}))
		.reduce((accumulator, currentTransation) => accumulator + parseFloat(currentTransation.amount), 0),
	symbol: env.REACT_APP_DEFAULT_SYMBOL,
});

export default connect(mapStateToProps)(DailyTotal);
