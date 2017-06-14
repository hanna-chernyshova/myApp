import React, { Component } from 'react';
import ParticipantInfo from './travels/ParticipantInfo'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({travels: state});

 class TravelDetails extends Component {
     displayAllParticipants(participants) {
        return participants.map(this.displayParticipant);
     }

      displayParticipant(participant, i) {
        return ( <li className ="nav-item" key = {'event_' + i}>
             <div className = "panel panel-default" style={{margin: 5 + 'px'}}>
                <div className = "panel-heading">
                    <h3 className = "panel-title">{participant.name}</h3>
                </div>
                <ParticipantInfo food = {participant.food} equip = {participant.equip} money = {participant.money} />
            </div>
            </li>
        )
    }

     render() {
        return <div>
            <ul className ="nav nav-pills nav-justified">
                {this.displayAllParticipants(this.props.travels[this.props.match.params.id].participants)}
            </ul>
        </div>
    }
}

export default connect(mapStateToProps)(TravelDetails)