import { isFSA } from 'flux-standard-action';

export default callback => data => {
	const result = callback(data);
	// Check Flux Standard Action (FSA) format
	if (!isFSA(result)) {
		console.error(result); //eslint-disable-line
		throw new Error(`FSA ${result.type} does not conform to FSA pattern`);
	}
	return result;
};
