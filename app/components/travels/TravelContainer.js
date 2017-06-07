var React = require('react');

var participants = [
    ['Nick', 'Anna', 'Olga'],
    ['Andrew', 'Galina', 'Nick','Anna'], 
    ['Olga', 'Anna', 'Yehor']
];

var TravelDetails = React.createClass({
    getInitialState: function() {
        return {users: []}
    },

    displayAllParticipants: function(users) {
        return users.map(this.displayParticipant);
    },

    displayParticipant: function(participant, i) {
        return ( <li className ="nav-item" key = {'event_' + i}><a className ="nav-link active" href="#">{participant}</a></li>
            )
    },

    render: function() {

         var i = this.props.index;
        console.log(i);
        console.log(participants[i]);
        return <ul className ="nav nav-pills nav-justified">

                {this.displayAllParticipants(participants[i])}
              </ul>
    }
});

module.exports = TravelDetails;