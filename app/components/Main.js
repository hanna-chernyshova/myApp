import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import TravelDetails from './TravelDetails';



class Main extends Component {

    createEvent = (travel, index) => {
		return ( <Link to = {"/details/"+index} key = {index}>
					<button id = {'travel_' + index} type = "button"
            				className = "btn btn-lg btn-block" style={{margin: 10 + 'px'}}>
							{travel.title}
					</button>
				</Link>
			)
	}	
	
	createListOfEvents = (travels) => {
			return travels.map(this.createEvent)
    }

    render () {
      const {travels} = this.props;
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