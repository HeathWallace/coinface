import { connect } from 'react-redux';
import TransactionsList from '../../components/TransactionsList/TransactionsList';

const mapStateToProps = state => ({
	transactions: Object.keys(state.transactions).map(hash => ({
		hash,
		...state.transactions[hash],
	})),
});

export default connect(mapStateToProps)(TransactionsList);
