import { connect } from 'react-redux';
import env from '../../utils/environment';
import DailyTotal from '../../components/DailyTotal/DailyTotal';

const mapStateToProps = state => ({
	total: Object.keys(state.transactions)
		.reduce((total, hash) => {
			const transaction = state.transactions[hash];
			const token = state.tokens[transaction.token];

			const { amount } = transaction;
			const { decimals } = token;

			const value = amount * Math.pow(10, -decimals);

			return total + value;
		}, 0),
	symbol: env.REACT_APP_DEFAULT_SYMBOL,
});

export default connect(mapStateToProps)(DailyTotal);
