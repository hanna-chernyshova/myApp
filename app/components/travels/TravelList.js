import { connect } from 'react-redux';
import { showTravel } from '../src/Actions';
import Main from '../Main';

const TravelList = ({data, onTravelClick}) => (
<ul className ="nav nav-pills nav-justified">
       <TravelDetails key = {data.id} 
            travel = {data} 
            onClick={() => onTravelClick(data)}
            />
       )}
    </ul>
)

export default TravelList