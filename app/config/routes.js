var React = require('react');
var Main = require('../components/Main');
//var Home = require('../components/Home');
var TravelDetails = require('../components/TravelDetails');
var BrowserRouter = require('react-router-dom');
var Route = BrowserRouter.Route;
var Switch = BrowserRouter.Switch;

module.exports = (
    <div>
        <Switch>
            <Route path = "/details/:index" component = {TravelDetails} />
            <Route path ="/" component = {Main} />
        </Switch>
    </div>
);