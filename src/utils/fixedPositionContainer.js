import React from 'react';

const defaultStyles = {
	transform: 'translateZ(0)',
	width: '100%',
	height: 500,
};

export default customStyles => {
	const styles = {...defaultStyles, ...customStyles};

	const fixedPositionContainer = story => <div style={styles}>{ story() }</div>;

	return fixedPositionContainer;
};
