import {combineReducers} from 'redux';
import {inputReducers} from './inputReducers'

export default combineReducers({
    users: inputReducers
});