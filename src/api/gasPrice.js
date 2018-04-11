import Api from './Api';

class GasPrice extends Api {
	getGasPrice() {
		const url = '/api/gasPriceOracle';
		return this.fetch(url).then(result => parseFloat(result.standard));
	}
}

export default new GasPrice('https://www.etherchain.org');
