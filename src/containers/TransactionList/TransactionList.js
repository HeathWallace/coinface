import { connect } from 'react-redux';
import TransactionsList from '../../components/TransactionsList/TransactionsList';

const mapStateToProps = state => ({
	transactions: Object.keys(state.transactions)
		.map(hash => {
			const transaction = state.transactions[hash];
			const token = state.tokens[transaction.token];

			const targetConfirmations = state.settings.trustLevel;

			// If confirmations exceeds target confirmations, trust
			// is 100%. Otherwise calculate how far to target
			// confirmation amount it is.
			const { confirmations } = transaction;
			const trust =
				confirmations >= targetConfirmations
					? 100
					: confirmations / targetConfirmations * 100;

			return {
				hash,
				...transaction,
				symbol: token.symbol,
				tokenName: token.name,
				decimals: token.decimals,
				trust,
			};
		})
		.sort((a, b) => b.timestamp - a.timestamp),
});

export default connect(mapStateToProps)(TransactionsList);
