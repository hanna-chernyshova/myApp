import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './routes/routes.js';
import Home from './components/Home.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import travelApp from './components/src/Store';
import Main from './components/Main';

let store = createStore(reducers)

export default class PageWithHeader extends Component {
    render() {
        return <Provider store={store}>
            <div>
                <Home />
                <Router>{routes}</Router>
            </div>
            </Provider>
    }
}


ReactDOM.render(
    <PageWithHeader />,
     document.getElementById('app'));