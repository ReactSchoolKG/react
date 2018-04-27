import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import ProductItem from '../ProductItem/productItem';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: ['Apple', 'Peanut', 'Tomato', 'Cucumber', 'Banana', 'Lemon']
    };
  }

  deleteRow(index) {
    const productsList = [...this.state.productsList];
    productsList.splice(index, 1);
    this.setState({
      productsList
    });
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.productsList.map((el, i) => {
            return (
              <ProductItem
                product={el}
                key={i}
                index={i}
                deleteRow={() => this.deleteRow(i)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Product;
