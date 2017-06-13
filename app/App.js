import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import routes from './routes/routes.js';
import Home from './components/Home.js';
import Main from './components/Main';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import travelApp from './components/src/Store';

const store = createStore(travelApp);
//console.log(store.getState());
//const travels = store.getState();
//console.log(travels);

export default class PageWithHeader extends Component {
    render() {
        return <Provider store={store}>
            <div>
                <Home />
                <Main travels = {store.getState()} 
                    onTravelItemClick={(id) => store.dispatch({ type: 'SHOW_TRAVEL' })}
                />

                </div>
            </Provider>
    }
}

const app = () => ReactDOM.render(
    <PageWithHeader />,
     document.getElementById('app'));
app()

store.subscribe(app)