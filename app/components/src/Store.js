let state = [
    {id:0,
    travel: {
        title: "2017-Georgia", 
        participants: [ {name: 'Nick', food: 'some food', equip: 'some equip', money: 200},
        {name: 'Anna', food: 'some food', equip: 'some equip', money: 300}, 
        {name: 'Olga', food: 'some food', equip: 'some equip', money: 400}]
    }
},

{
    id: 1,
    travel: {
        title: "2016-Montenegro",
        participants: ['Andrew', 'Galina', 'Nick','Anna']
    }
}, 

{
    id:2,
    travel: {
        title: "2016-Carpatians",
        participants: ['Olga', 'Anna', 'Yehor']
    }
}
];

const travelsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW':
      return [
        state,
        {
          id: action.id,
          data: action.data
        }
      ]

    case 'SHOW_TRAVEL':
      return state.map(travel => {
        if (travel.id === action.id) {
          return travel
        }
      }
      )

    default:
      return state
  }
}

export default travelsReducer