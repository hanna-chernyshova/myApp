import React, { Component } from 'react';
//import ParticipantInfo from './ParticipantInfo.js';
import TravelDetails from './TravelDetails';

/*const participants = [
    [
        {name: 'Nick', food: 'some food', equip: 'some equip', money: 200},
        {name: 'Anna', food: 'some food', equip: 'some equip', money: 300}, 
        {name: 'Olga', food: 'some food', equip: 'some equip', money: 400}
    ],
    ['Andrew', 'Galina', 'Nick','Anna'], 
    ['Olga', 'Anna', 'Yehor']
];*/

const TravelContainer = ({travels, onTravelClick}) => <ul className ="nav nav-pills nav-justified">
       {travels.map((travel) =>
       <TravelDetails key = {travel.id} 
            travel = {travel} 
            onClick={() => onTravelClick(travel.id)}
            />
       )}
    </ul>

/*class TravelContainer extends Component {
 
    displayParticipantInfo(e) { 
        e.preventDefault() 
    }
    
    displayAllParticipants(users) {
        return users.map(this.displayParticipant);
    }

    displayParticipant(participant, i) {
        return ( <li className ="nav-item" key = {'event_' + i} onClick = { (e) => e.preventDefault() }>
            <a className ="nav-link active" href="#">{participant.name}</a>
            <ParticipantInfo food = {participant.food} equip = {participant.equip} money = {participant.money} />
            </li>
                
            )
    }

    render() {
       var i = this.props.index;
       return  <ul className ="nav nav-pills nav-justified">
                    {this.displayAllParticipants(participants[i])}
              </ul>
    }
}*/

export default TravelContainer;