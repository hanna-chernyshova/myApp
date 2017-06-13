import React, { Component } from 'react';
import ParticipantInfo from './travels/ParticipantInfo'
//import TravelContainer from './travels/TravelContainer.js';

 class TravelDetails extends Component {
     displayAllParticipants(participants) {
         //console.log(participants)
        return participants.map(this.displayParticipant);
     }

      displayParticipant(participant, i) {
          //console.log(participant)
        return ( <li className ="nav-item" key = {'event_' + i} onClick = { (e) => e.preventDefault() }>
            <a className ="nav-link active" href="#">{participant.name}</a>
            <ParticipantInfo food = {participant.food} equip = {participant.equip} money = {participant.money} />
            </li>
                
            )
    }

     render() {
         //console.log(this.props)
               return <div>
                   <ul className ="nav nav-pills nav-justified">
                   {this.displayAllParticipants(this.props.participants)}
                   </ul>
                   </div>
    }

   
}

export default TravelDetails