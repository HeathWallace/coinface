import { createReducer } from '../util';
import * as types from '../../constants/actionTypes';

const initialSettings = 0;

const loadingGasPrice = () => initialSettings;

const loadedGasPrice = (gas, { payload }) => payload.gasPrice;

const gasPriceReducer = createReducer(initialSettings, {
	[types.START_LOADING_GAS_PRICE]: loadingGasPrice,
	[types.FINISH_LOADING_GAS_PRICE]: loadedGasPrice,
});

export default gasPriceReducer;
