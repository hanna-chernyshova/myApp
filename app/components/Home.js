import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//History can be used to add the "Back" btn later
//var createHistory = require('history').createBrowserHistory;

 class Home extends Component {
	render() {
		return (<div className = "container">
			<div className = "col-md-12">
				<h2 className = "text-center">Here you can manage your travels</h2>
			</div>
			<div className = "col-md-2"></div>
			<div className = "col-md-8">
				<button type = "button" className = "btn btn-primary btn-lg btn-block">New Event</button>
				<div><p>  </p></div>
			</div>
			<div className = "col-md-2"></div>
		</div>
		)
	}
 }

	export default Home;