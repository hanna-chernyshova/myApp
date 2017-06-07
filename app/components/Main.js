var React = require('react');
var TravelDetails = require ('./TravelDetails.js')
var BrowserRouter = require('react-router-dom');
var Link = BrowserRouter.Link;

var events = ["2017-Georgia", "2016-Montenegro", "2016-Carpatians"];

var Main = React.createClass({
    displayDetails: function(index) {
        return <TravelDetails index = {index} />
    },

    createEvent: function(event, index) {
        //console.log(index);
			return (<Link to={'details/' + index} key = {index}> <button id = {'event_' + index} type = "button"
            className = "btn btn-default btn-lg btn-block" >{event}</button></Link>
            )
				},	
	
	createListOfEvents: function(events) {
			return events.map(this.createEvent);
		},

	render: function() {
		    return (<div className = "col-md-12">
                    <div className = "col-md-2"></div>
                        <div className = "col-md-8">
                            {this.createListOfEvents(events)}
                        </div>
						<div className = "col-md-12"></div>
					</div>
            )
		  }
	});

module.exports = Main;