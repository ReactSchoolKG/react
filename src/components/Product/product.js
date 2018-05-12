import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProductItem from '../ProductItem/productItem';
import productService from '../../productService';
import History from '../History/history';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: productService.getProducts(),
      history: []
    };
  }

  toggleRow(index) {
    const currentDate = new Date();
    const currentDateInfo = `${currentDate.getDate()}-${currentDate.getMonth() +
      1}-${currentDate.getFullYear()}: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    const productsList = [...this.state.productsList];

    productsList[index].available = !productsList[index].available;

    const newHistory = {
      currentDateInfo,
      deleted: productsList[index].available,
      index
    };

    const history = [...this.state.history, newHistory];

    this.setState({
      productsList,
      history
    });
  }

  render() {
    return (
      <React.Fragment>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Delete / Restore</th>
              <th scope="col">Information about product</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productsList.map((product, i) => (
              <ProductItem
                product={product}
                key={i}
                index={i}
                toggleRow={() => this.toggleRow(i)}
              />
            ))}
          </tbody>
        </table>

        <ul className="list-group">
          <History historyData={this.state.history} />
        </ul>
      </React.Fragment>
    );
  }
}

export default Products;
