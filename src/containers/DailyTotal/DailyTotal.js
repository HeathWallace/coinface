import { connect } from 'react-redux';
import moment from 'moment';
import env from '../../utils/environment';
import DailyTotal from '../../components/DailyTotal/DailyTotal';

const extractDate = (transactions) => {
	let keys = Object.keys(transactions);
	let transactionId = keys[keys.length - 1];
	let transaction = transactions[transactionId];
	let date = moment(transaction.timestamp * 1000);
	return date.format('ddd D MMM');
};

const mapStateToProps = state => ({
	total: Object.keys(state.transactions)
		.reduce((total, hash) => {
			const transaction = state.transactions[hash];
			const token = state.tokens[transaction.token];

			const { amount } = transaction;
			const { decimals } = token;

			const decimalPointFactor = Math.pow(10, decimals);
			const value = amount * Math.pow(10, -decimals);
			
			return Math.round((total + value) * decimalPointFactor) / decimalPointFactor;
		}, 0),
	symbol: env.REACT_APP_DEFAULT_SYMBOL,
	date: extractDate(state.transactions),
});

export default connect(mapStateToProps)(DailyTotal);
