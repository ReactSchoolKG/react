import React, { Component } from 'react';

import ProductTable from './ProductTable';
import HistoryList from './HistoryList';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: this.props.products,
      history: [],
    }

    this.toggleProduct = this.toggleProduct.bind(this);
  }

  toggleProduct(id) {
    const { products, history } = this.state;
    const newProducts = JSON.parse(JSON.stringify(products));
    const targetProduct = newProducts.find(product => product.id === id);

    targetProduct.isDeleted = !targetProduct.isDeleted;

    this.setState({
      products: newProducts,
      history: [...history, {id, isDeleted: targetProduct.isDeleted, time: new Date().toLocaleString()},],
    });
  }

  render() {
    const { products, history } = this.state;
    
    return(
      <div>
        <ProductTable 
          products={products}
          toggleProduct={this.toggleProduct}
        />
        <HistoryList
          historyData={history}
          productData={products}
        />
      </div>
    )
  }
}

export default App;
