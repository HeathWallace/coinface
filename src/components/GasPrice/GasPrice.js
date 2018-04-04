import React from 'react';
import PropTypes from 'prop-types';

const GasPrice = ({ recommendedPrice }) => (
	<div className="GasPrice">
		<p>Suggested Gas price: {recommendedPrice}</p>
	</div>
);

GasPrice.description = `
	A visualization of the recommended gas price.
`;

GasPrice.propTypes = {
	recommendedPrice: PropTypes.number,
};

export default GasPrice;
