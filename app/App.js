var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-dom').BrowserRouter;
var routes = require('./config/routes');
var Home = require('./components/Home.js')

var PageWithHeader = React.createClass({
    render: function() {
        return <div>
        <Home />
        <Router>{routes}</Router>
        </div>
    }
});

ReactDOM.render(
    <PageWithHeader />,
     document.getElementById('app'));