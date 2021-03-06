import React from 'react';
import ReactDom from 'react-dom';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers'
import reduxThunk from 'redux-thunk'

import App from './routes/App';

//Dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducer,{},composeEnhancers(applyMiddleware(reduxThunk)));

ReactDom.render(
    <Provider store={store}>
        <App/>
   </Provider>
    ,
    document.getElementById('app')
)