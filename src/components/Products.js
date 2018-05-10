import React, { Component } from 'react';

import ProductsTable from './ProductsTable';
import ProductsHistoryList from './ProductsHistoryList';
import { getAll, getOne, updateProducts } from '../ProductsService';

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

  toggleProduct(id) {
    const { history } = this.state;
    const product = getOne(id);
    const updatedData = updateProducts(id, {isDeleted: !product.isDeleted});

    this.setState({
      products: updatedData,
      history: history.concat({id, isDeleted: !product.isDeleted, time: new Date().toLocaleString()})
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
