

// import {GET_USERS, ADD_USER} from '../actions/types';

// const initialState ={
//     users:[],
//     user:{}
// };
export function inputReducers(state={}, action){
    switch(action.type){
        case 'GET_USERS':
        return{
            ...state,
            data: action.payload,
        }
        default:
        return state;
    }
}
