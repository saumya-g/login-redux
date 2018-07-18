import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import {Provider} from 'react-redux';
import store from '../src/store';
class App  extends React.Component{
    render(){
        return(
            <Provider store={store}>
               <div>
               <Header />
               <Login />
               <Footer />
               </div>
               </Provider>
        );
    }
}

export default App;