import React, { Component } from 'react';

 class ParticipantInfo extends Component {
    render() {
        return <div class="card">
  <div class="card-block">
    <h4 class="card-title">Food: {this.props.food}</h4>
        <h3>{this.props.equip}</h3>
        <h3>{this.props.money}</h3>
        </div>
         </div>
    }
}

export default ParticipantInfo;