"use strict";

var React = require('react');
var Dispatcher = require('./Dispatcher.js');  
var EventPage = require('./EventPage.js');

var events = ["2017-Georgia", "2016-Montenegro", "2016-Carpatians"];


var MainPage = React.createClass({
	
	eventPageRenderer: function() {
		return <EventPage />;
	},

	showInfoAboutEvent: function() {
			
		},
	
	createEvent: function(event, index) {
			return <button onClick = {this.eventPageRenderer} id = {'event_' + index} type = "button" className = "btn btn-default btn-lg btn-block" >{event}</button>
				},	
	
	createListOfEvents: function(events) {
			return events.map(this.createEvent);
		},
		
	render: function() {
		    return <div className = "container">
				
					<div className = "row">
						<div className = "col-md-12">
							<h1>Events</h1>
						</div>
						<div className = "col-md-12">
							<button type = "button" className = "btn btn-primary btn-lg btn-block" >New Event</button>
							{this.createListOfEvents(events)}
						</div>
					</div>
					
				</div>;
		  }
	});

module.exports = MainPage;
