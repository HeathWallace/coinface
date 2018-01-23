import { connect } from 'react-redux';
import TransactionsList from '../../components/TransactionsList/TransactionsList';

const mapStateToProps = state => ({
	transactions: state.transactions,
});

export default connect(mapStateToProps)(TransactionsList);
