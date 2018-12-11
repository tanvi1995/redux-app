import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from './reducers/combineReducers'
import App  from './rootComponent/app';

const reduxStore =  createStore(allReducers)
ReactDOM.render(
    <Provider store={reduxStore}>
        <App></App>
    </Provider>,document.getElementById("root"))
