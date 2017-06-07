var React = require('react');
var BrowserRouter = require('react-router-dom');
var Link = BrowserRouter.Link;

//History can be used to add the "Back" btn later
//var createHistory = require('history').createBrowserHistory;

var Home = React.createClass({
	render: function() {
		    return (<div className = "container">
					    <div className = "col-md-12">
							<h2 className = "text-center">Here you can manage your travels</h2>
						</div>
                        <div className = "col-md-2"></div>
						<div className = "col-md-8">
							<button type = "button" className = "btn btn-primary btn-lg btn-block">New Event</button>
						</div>
                        <div className = "col-md-2"></div>
                    </div>
           )
		  }
	});

    module.exports = Home;