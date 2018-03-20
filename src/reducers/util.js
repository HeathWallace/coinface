/* eslint-disable no-console */
import { isFSA } from 'flux-standard-action';

const createReducer = (initialState, handlers) => (state = initialState, action) => {

	if (!isFSA(action)) {
		console.trace(`Unrecognised format: ${action.type} is not FSA-compliant`);
	}

	if (handlers.hasOwnProperty(action.type)) {
		return handlers[action.type](state, action);
	} else {
		return state;
	}
};

export { createReducer };
