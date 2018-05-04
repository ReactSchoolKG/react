import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const { products, toggleProduct } = this.props;
  
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
                  toggleProduct = {toggleProduct}
                >
                  Delete
                </ProductRow>
              ))
            }
          </tbody>
        </Table>
        
      </div>
    )
  }
}

export default ProductTable;
