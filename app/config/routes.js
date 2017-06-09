import React from 'react';
import Main from '../components/Main';
//import Home from'../components/Home';
import TravelDetails from '../components/TravelDetails';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

export default (
    <div>
        <Switch>
            <Route path = "/details/:index" component = {TravelDetails} />
            <Route path ="/" component = {Main} />
        </Switch>
    </div>
);