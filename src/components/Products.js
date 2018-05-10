import React, { Component } from 'react';

import ProductsTable from './ProductsTable';
import ProductsHistoryList from './ProductsHistoryList';
import { getAll, updateOne } from '../ProductsService';

class Products extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: getAll(),
      history: [],
    }

    this.toggleProduct = this.toggleProduct.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  toggleProduct(id, isDeleted) {
    const { history } = this.state;
    updateOne(id, { isDeleted: !isDeleted });
    const updatedProducts = getAll();
    const updatedProduct = updatedProducts.find(p => p.id === id);

    this.setState({
      products: updatedProducts,
      history: history.concat({id, isDeleted: updatedProduct.isDeleted, time: new Date().toLocaleString()})
    });
  }

  handleShowMore(id) {
    const { match: { path }, history, } = this.props;
    const newPath = `${path}/${id}`;
    history.push(newPath);
  }

  render() {
    const { products, history } = this.state;
    
    return(
      <div>
        <ProductsTable 
          products={products}
          toggleProduct={this.toggleProduct}
          handleShowMore={this.handleShowMore}
        />
        <ProductsHistoryList
          historyData={history}
          productData={products}
        />
      </div>
    )
  }
}

export default Products;
