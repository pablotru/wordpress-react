import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './Reducers/RootReducer';

const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;