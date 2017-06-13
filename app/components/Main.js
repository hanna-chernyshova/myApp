import React, { Component } from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TravelDetails from './TravelDetails';

class Main extends Component {

	constructor() {
		 super();
		this.state = {showComponent: false};
		 //this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		e.preventDefault() 
		//this.props.onTravelItemClick
		this.setState({
      		showComponent:  true
    	});
	}

    createEvent = (travel, index) => {
		//console.log(travel);
		//console.log(index);
		//console.log(this.props.onTravelItemClick);
			return ( <div key = {index}>
				<button id = {'travel_' + index} type = "button" onClick = {this.handleClick}
            		className = "btn btn-lg btn-block" >{travel.data.title}
				</button>
				<div><p>  </p></div>
					{this.state.showComponent ? <TravelDetails participants = {travel.data.participants} /> : null }
					</div>
			)
			}	
	
	createListOfEvents = (travels) => {
			return travels.map(this.createEvent)
    }

    render () {
      const {travels} = this.props;  
			//console.log(travels);
			//console.log(onTravelItemClick);
        return (
            <div className = "col-md-12">
            		<div className = "col-md-2"></div>
            		    <div className = "col-md-8" >
							{this.createListOfEvents(travels)}
						</div>
                    <div className = "col-md-2"></div>
			</div>
        )
    }
}

export default Main