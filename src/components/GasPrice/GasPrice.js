import React from 'react';
import PropTypes from 'prop-types';

const GasPrice = ({ recommendedPrice, unit }) => (
	<div className="GasPrice">
		<p>
			Suggested Gas price: {recommendedPrice}
			{unit}
		</p>
	</div>
);

GasPrice.description = `
	A visualization of the recommended gas price.
`;

GasPrice.propTypes = {
	recommendedPrice: PropTypes.number,
	unit: PropTypes.string,
};

export default GasPrice;
