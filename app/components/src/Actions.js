let nextTravelId = 3;

//Takes the text from Add New field and returns proper “Action” JSON to send to other components.
export const addNewTravel = (data) => ({
  type: 'ADD_NEW',
  id: nextTravelId++,
  data
})

//Takes Trip item’s id and returns proper “Action” JSON object to send to other components.
export const showTravel = (id) => ({
  type: 'SHOW_TRAVEL ',
  id
})