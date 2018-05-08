import React from 'react';
import ProductItem from './ProductItem.js';
import HistorySheet from './historySheet.js';

    let products = ["Apple", "Orange", "Ananas", "Banana", "Strawberry", "Cherry"];

export default class ProductList extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      eventList: []
    }
  }

  addEventToHistory(item, action){
      this.setState({eventList: [ ...this.state.eventList, "Item: " + item + ";  Action: " + action + ";  " + new Date().toLocaleTimeString()]});
    }

  render(){
    return (
      <div>
        <ul  className="product-table">
        {products.map((el, index) => 
          <li key={index}>
            <ProductItem eventAdder={this.addEventToHistory.bind(this)} element={el} list={products}>
            </ProductItem>
          </li>)}

        </ul>
        <HistorySheet>
          {this.state.eventList.map((el, index) =>  
          <p key={index}>
            {el}
          </p>)}
        </HistorySheet>
      </div>
      );
  }
}
