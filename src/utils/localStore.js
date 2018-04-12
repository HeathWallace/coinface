class LocalStore {
	getItem(key) {
		let value = localStorage.getItem(key);
		try {
			return JSON.parse(value);
		} catch (e) {
			return value;
		}
	}
	setItem(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}
	setItems(object) {
		for (let key in object) {
			this.setItem(key, object[key]);
		}
	}
}

export default new LocalStore();
