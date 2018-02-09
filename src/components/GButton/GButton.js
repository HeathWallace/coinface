import React from 'react';
import PropTypes from 'prop-types';

const GButton = ({children}) => {
	return <button type="button">{children}</button>;
};

GButton.propTypes = {
	children: PropTypes.string.isRequired,
};
