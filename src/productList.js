import React from 'react';
import ProductItem from './ProductItem.js';

    let products = ["Apple", "Orange", "Ananas", "Banana", "Strawberry", "Cherry"];

export default class ProductList extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     showItem: "true"
  //   };
  // }

  // someAction(e){
  //   console.log("hey")
  //   this.setState({
  //     showItem:"false"
  //   })
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {showItem: true}
  //   this.handleToggleClick = this.handleToggleClick.bind(this);
  // }

  // handleToggleClick() {
  //   this.setState(prevState => ({
  //     showItem: !prevState.showItem
  //   }));
  // }
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ul  className="product-table">
      {products.map((el, index) => 
        <li key={index}>
          <ProductItem element={el} list={products}>
          </ProductItem>
        </li>)}

      </ul>
      );
  }
}
