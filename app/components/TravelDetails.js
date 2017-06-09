import React, { Component } from 'react';
import TravelContainer from './travels/TravelContainer.js';

 class TravelDetails extends Component {
     render() {
        return <div>
                    <TravelContainer index = {this.props.match.params.index} />
              </div>
    }
}

export default TravelDetails;