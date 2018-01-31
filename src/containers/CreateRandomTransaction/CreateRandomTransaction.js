import { connect } from 'react-redux';
import { addTransaction } from '../../actions';
import Button from '../../components/Button/Button';

const createRandomTransaction = () => ({
	'address': `${Math.random()}`,
	'topics': [`${Math.random()}`, `${Math.random()}`, `${Math.random()}`],
	'data': `${Math.random()}`,
	'blockNumber': `${Math.random()}`,
	'timeStamp': `${Math.random()}`,
	'gasPrice': `${Math.random()}`,
	'gasUsed': `${Math.random()}`,
	'logIndex': `${Math.random()}`,
	'transactionHash': `${Math.random()}`,
	'transactionIndex': `${Math.random()}`,
});

const mapDispatchToProps = dispatch => ({
	onClick: () => dispatch(addTransaction(createRandomTransaction())),
});

export default connect(null, mapDispatchToProps)(Button);
