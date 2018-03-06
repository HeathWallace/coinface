import React from 'react';
import PropTypes from 'prop-types';

import './GasPrice.css';

const GasPrice = ( { recommendedPrice } ) => (
	<div className="GasPrice">
		<p>Suggested Gas price: {recommendedPrice}</p>
	</div>
);

GasPrice.propTypes = {
	recommendedPrice: PropTypes.number,
};

GasPrice.description = `
	A visualization of the recommended gas price.
`;

export default GasPrice;
