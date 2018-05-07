import React, { Component } from 'react';
import ProductList from './nesting_components/productList.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList/>
      </div>
    );
  }
}


