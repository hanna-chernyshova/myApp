import React, { Component } from 'react';
//import TravelContainer from './travels/TravelContainer.js';

 class TravelDetails extends Component {
     displayAllParticipants(participants) {
        return participants.map(this.displayParticipant);
     }

     render() {
               return <div>
                    ( <li className ="nav-item" key = {'event_' + i} 
                    onClick = { (e) => e.preventDefault() }>
            <a className ="nav-link active" href="#">
                {participant.name}
                </a>
            <ParticipantInfo food = {participant.food} 
            equip = {participant.equip} 
            money = {participant.money} />
            </li>
                
            )
              </div>
    }

    displayParticipant(participant, i) {
        return ( <li className ="nav-item" key = {'event_' + i} onClick = { (e) => e.preventDefault() }>
            <a className ="nav-link active" href="#">{participant.name}</a>
            <ParticipantInfo food = {participant.food} equip = {participant.equip} money = {participant.money} />
            </li>
                
            )
    }
}

export default TravelDetails