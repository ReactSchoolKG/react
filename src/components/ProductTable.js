import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import ProductRow from './ProductRow';

class ProductTable extends Component {
  constructor(props){
    super(props);

    this.state = {
      deletedProducts: [],
      products: this.props.products,
    }

    this.handleRowDel = this.handleRowDel.bind(this);
    this.handleReturnRow = this.handleReturnRow.bind(this);
  }

  handleRowDel(position){
    const { products } = this.state;
    const { deletedProducts } = this.state;

    this.setState({
      deletedProducts: [...deletedProducts, [...products]],
      products: products.filter((product, index) => index !== (position - 1) ),
    });
  }

  handleRowsSort(sign) {
    const { products } = this.state;

    this.setState({
      products: products.sort((a, b) => {
        if(a < b) return -1*sign;
        if(a > b) return 1*sign;
        return 0;
      })
    });
  }

  handleReturnRow() {
    const { deletedProducts } = this.state;

    this.setState({
      products: deletedProducts.pop(),
    });
  }

  render() {
    const { products } = this.state;
    const { deletedProducts } = this.state;

    return(
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <td>Position</td>
            <td>Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => (
              <ProductRow
                name={product}
                key={index}
                position={index + 1}
                handleRowDel = {this.handleRowDel}
              >
                Delete
              </ProductRow>
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Button
                bsStyle="warning"
                onClick={() => this.handleRowsSort(1)}
              >
                Sort A-Z
              </Button>
            </td>
            <td>
              {deletedProducts.length > 0
                ? <Button
                    bsStyle="success"
                      onClick={this.handleReturnRow}
                    >
                    RETURN LAST DELETED ITEM
                  </Button>
                : null  
              }
            </td>
            <td>
              <Button
                bsStyle="primary"
                onClick={() => this.handleRowsSort(-1)}
              >
                Sort Z-A
              </Button>
            </td>
          </tr>        
        </tfoot>
      </Table>
    )
  }
}

export default ProductTable;
