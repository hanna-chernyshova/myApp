import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './routes/routes.js';
import Home from './components/Home.js';

export default class PageWithHeader extends Component {
    render() {
        return <div>
                <Home />
                <Router>{routes}</Router>
              </div>
    }
}


ReactDOM.render(
    <PageWithHeader />,
     document.getElementById('app'));