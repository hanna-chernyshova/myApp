import { connect } from 'react-redux';
import { showTravel } from '../src/Actions';
import Main from '../Main';

const mapStateToProps = (state) => {
  return travels
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(showTravel(id))
    }
  }
}

const TravelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default TravelList