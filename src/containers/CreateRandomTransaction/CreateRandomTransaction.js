import { connect } from 'react-redux';
import { addTransaction } from '../../actions';
import Button from '../../components/Button/Button';

const mapDispatchToProps = dispatch => ({
	onClick: () => dispatch(addTransaction({ amount: Math.random() })),
});

export default connect(null, mapDispatchToProps)(Button);
