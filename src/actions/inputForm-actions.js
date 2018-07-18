//import {GET_USERS, ADD_USER} from './types';
import axios from 'axios';

export const getData = data => dispatch =>{
    // axios.interceptors.request.use((config) => {
    //     console.log('requesting');
    //     return config;
    // }, function(error) {
    //     console.log('request', error)
    // })
    // axios.interceptors.response.use( config => {
    //     console.log(config.status);
    //     return config;
    // }, function(error) {
    //     console.log('dsgdfng', error);
    // })
    axios.post("http://localhost:3000/form",{
        name:data.name,
        email:data.email
    })
    .then(res => 
        
        {
            console.log(res);
            dispatch(
        {
             type:'GET_USERS',
             payload:data,
        })
    }
)
    .catch(error => console.error( error));

};