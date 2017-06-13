import React, { Component } from 'react';

const travelApp = (state = [
    {
    id: 0,
    data: {
        title: "2017-Georgia", 
        participants: [{name: 'Nick', food: 'some food', equip: 'some equip', money: 200},
        {name: 'Anna', food: 'some food', equip: 'some equip', money: 300}, 
        {name: 'Olga', food: 'some food', equip: 'some equip', money: 400}]
    }
},

{
    id: 1,
    data: {
        title: "2016-Montenegro",
        participants: [{name: 'Andrew', food: 'some food', equip: 'some equip', money: 200},
        {name: 'Galina', food: 'some food', equip: 'some equip', money: 300}, 
        {name: 'Anna', food: 'some food', equip: 'some equip', money: 300}, 
        {name: 'Nick', food: 'some food', equip: 'some equip', money: 400}]
    }
}, 

{
    id: 2,
    data: {
        title: "2016-Carpatians",
        participants: [{name: 'Olga', food: 'some food', equip: 'some equip', money: 200},
        {name: 'Yehor', food: 'some food', equip: 'some equip', money: 300}, 
        {name: 'Anna', food: 'some food', equip: 'some equip', money: 300}]
    }
}
], 
action) => {
  
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
      return state
      /*<ul>
        {state.map((travel,i) =>  <li key = {i}>{travel.data}</li>
           )}
        </ul>*/
      
    default:
      return state
}
}

export default travelApp