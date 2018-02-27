class InputIdGenerator {
	constructor() {
		this.index = 0;
		this.inputPrefix = 'input-';
	}

	get nextIndex() {
		return `${this.inputPrefix}${this.index++}`;
	}
}

export default new InputIdGenerator();
