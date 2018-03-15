export default class Api {
	constructor(base, fixedParams) {
		this.base = base;
		this.fixedParams = fixedParams;
	}

	fetch(url, params) {
		const allParams = {...this.fixedParams, ...params};

		const escape = encodeURIComponent;

		const finalURL = this.base + url + '?' + Object.keys(allParams).map(key => `${escape(key)}=${escape(allParams[key])}`).join('&');

		return fetch(finalURL).then(response => response.json());
	}
}
