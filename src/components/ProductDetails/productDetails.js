import React, { Component } from 'react';
import productService from '../../productService';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }

  componentWillMount() {
    this.productId = parseInt(this.props.match.params.id, 10);
    const product = productService.getProductById(this.productId);

    this.setState({
      product
    });
  }

  render() {
    const { available, banner, maxPrice, minPrice, name } = this.state.product;
    return (
      <React.Fragment>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Banner</th>
              <th scope="col">Available</th>
              <th scope="col">Max Price</th>
              <th scope="col">Min Price</th>
              <th scope="col">Average Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.productId}</td>
              <td>{name}</td>
              <td>{banner}</td>
              <td>{available.toString()}</td>
              <td>{maxPrice}</td>
              <td>{minPrice}</td>
              <td>{(maxPrice + minPrice) / 2}</td>
            </tr>
          </tbody>
        </table>

        <Link className="btn btn-primary" to="/product">
          Go to products
        </Link>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
