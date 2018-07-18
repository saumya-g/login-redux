import { createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const initialState={};

const middleWare= applyMiddleware(thunk);

const store= createStore(allReducers, initialState, middleWare);

export default store;