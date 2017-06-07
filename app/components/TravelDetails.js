var React = require('react');
var TravelContainer = require('./travels/TravelContainer.js');

var TravelDetails = React.createClass({
   
    render: function() {
        //console.log(this.props);
        return <div>
                    <TravelContainer index = {this.props.match.params.index} />
              </div>
    }
});

module.exports = TravelDetails;