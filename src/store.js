import {createStore} from 'redux';
import {purchaseReducer} from './reducers';

export default createStore(purchaseReducer);