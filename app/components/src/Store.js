import React, { Component } from 'react';

const travelApp = (state = [
    {
   title: "2017-Georgia", 
        participants: [{name: 'Nick', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [200,300,100]},
        {name: 'Anna', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [300,10]}, 
        {name: 'Olga', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [400,25]}]
},

{
        title: "2016-Montenegro",
        participants: [{name: 'Andrew', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [200,3]},
        {name: 'Galina', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [200,100]}, 
        {name: 'Anna', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [200,300]}, 
        {name: 'Nick', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [300,100]}]
}, 

{ 
        title: "2016-Carpatians",
        participants: [{name: 'Olga', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [55,80,100]},
        {name: 'Yehor', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [200,250,75]}, 
        {name: 'Anna', food: ['some food', 'other food', 'one more food'], equip: ['1', '2', '3'], money: [120,45,15]}]
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