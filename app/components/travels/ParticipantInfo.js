import React, { Component } from 'react';

 class ParticipantInfo extends Component {
    render() {
        return <div className = "card">
  <div className = "card-block">
    <h4 className = "card-title">Food: {this.props.food}</h4>
        <h4>Equip: {this.props.equip}</h4>
        <h4>Money: {this.props.money}</h4>
        </div>
         </div>
    }
}

export default ParticipantInfo;