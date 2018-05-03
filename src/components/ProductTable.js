import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import ProductRow from './ProductRow';
import StoryList from './StoryList';

class ProductTable extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: this.props.products,
      history: [],
    }

    this.handleProductChange = this.handleProductChange.bind(this);
  }

  handleProductChange(id) {
    const { products, history } = this.state;
  
    this.setState({
      products: products.map(product => product.id === id ? {...product, isDeleted: !product.isDeleted} : {...product}),
      history: [...history, {id, isDeleted: (products.find(obj => obj.id === id)).isDeleted, time: new Date().toLocaleString()},],
    });
  }

  render() {
    const { products, history } = this.state;
    console.log(history);
    return(
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => (
                <ProductRow
                  productData={product}
                  key={product.id}
                  handleProductChange = {this.handleProductChange}
                >
                  Delete
                </ProductRow>
              ))
            }
          </tbody>
        </Table>
        <StoryList
          historyData={history}
          productData={products}
        />
      </div>
    )
  }
}

export default ProductTable;
