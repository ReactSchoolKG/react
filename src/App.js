import React, { Component } from 'react';
import './App.css';
import Product from './components/ProductList/productList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <Product />
      </div>
    )
  }

}

export default App;