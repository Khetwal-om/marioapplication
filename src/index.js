import React from 'react';
import ReactDOM from 'react-dom';


import {applyMiddleware, createStore,compose} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import thunk from 'redux-thunk'


const store=createStore(rootReducer, 
    compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore}))),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)

    )






ReactDOM.render(
   <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

