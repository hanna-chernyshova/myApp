import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './routes/routes.js';
import { createBrowserHistory } from 'history';
import { connectRouter, ConnectedRouter,  routerMiddleware } from 'connected-react-router';

import Home from './components/Home.js';
import Main from './components/Main';
import TravelDetails from './components/TravelDetails';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import travelApp from './components/src/Store';

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(travelApp),
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

const travels = store.getState()

export default class PageWithHeader extends Component {
    render() {
        return (<Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Home />
                        <Switch>
                            <Route path = "/details/:id" component = {TravelDetails}  />
                            <Route path ="/" render={(props) => ( <Main travels = {travels}/> )} />
                        </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
        )
    }
}

const app = () => ReactDOM.render(
    <PageWithHeader />,
     document.getElementById('app'));
app()

store.subscribe(app)