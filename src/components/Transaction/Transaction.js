import React from 'react';

const Transaction = props => (
	<div className="Transaction">
		<pre><code>{JSON.stringify(props, null, 4)}</code></pre>
		<hr/>
	</div>
);

export default Transaction;
