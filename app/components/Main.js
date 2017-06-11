import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TravelList from './travels/TravelList'

//var events = ["2017-Georgia", "2016-Montenegro", "2016-Carpatians"];

/*class Main extends Component {
      
    createEvent(event, index) {
			return (<Link to={'details/' + index} key = {index}> 
			<button id = {'event_' + index} type = "button"
            className = "btn btn-default btn-lg btn-block" >{event}
			</button></Link>
            )
				}	
	
	createListOfEvents(events) {
			return events.map(this.createEvent);
		}

	render() {
		return (<div className = "col-md-12">
                    <div className = "col-md-2"></div>
                        <div className = "col-md-8">
                            {this.createListOfEvents(events)}
                        </div>
						<div className = "col-md-12"></div>
					</div>
            )
		}
	}*/



const Main = ({travels, onTravelClick}) => (
		<div className = "col-md-12">
            <div className = "col-md-2"></div>
            {travels.map(travel =>
				<TravelList
					key = {travel.id}
					travel = {travel}
					onClick = {() => onTravelClick}
					/>
				)}
			<div className = "col-md-12"></div>
		</div>
	)

export default Main;