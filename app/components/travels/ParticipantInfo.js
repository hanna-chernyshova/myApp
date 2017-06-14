import React, { Component } from 'react';

 class ParticipantInfo extends Component {
 displayInfoItems(info) {
        return info.map((item,id) => (<button type="button" className="btn btn-default" key = {id} style={{margin: 2 + 'px'}}>{item}</button>)
        );
 }

 countMoneySum = (moneyArr) => {
     let sum = 0;
     for (let i = 0; i < moneyArr.length; i++) {
         sum = sum + moneyArr[i];
     }
     return sum;
 }
    render() {
        return <div className = "card">
    <div style = {{'borderWidth': 5 +'px'}}>
        <h4>Food: </h4>
             {this.displayInfoItems(this.props.food)}
    </div>
    <div className = "card-block">
        <h4>Equip: </h4>
         {this.displayInfoItems(this.props.equip)}
    </div>
    <div className = "card-block">

        <h4>Money: </h4>
          {this.displayInfoItems(this.props.money)}
          <h5>Total: {this.countMoneySum(this.props.money)}</h5>
    </div>
</div>
    }
}

export default ParticipantInfo;