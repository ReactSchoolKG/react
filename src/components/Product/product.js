import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProductItem from '../ProductItem/productItem';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [
        { name: 'Apple', deleted: false },
        { name: 'Peanut', deleted: false },
        { name: 'Tomato', deleted: false },
        { name: 'Cucumber', deleted: false },
        { name: 'Banana', deleted: false },
        { name: 'Lemon', deleted: false }
      ],
      history: []
    };
  }

  toggleRow(index) {
    const currentDate = new Date();
    const currentDateInfo = `${currentDate.getDate()}-${currentDate.getMonth() +
      1}-${currentDate.getFullYear()}: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    const newHistory = {
      currentDateInfo,
      index
    };

    const productsList = [...this.state.productsList];
    const history = [...this.state.history, newHistory];

    productsList[index].deleted = !productsList[index].deleted;

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
          {this.state.history.map((element, index) => {
            {
              return this.state.productsList[element.index].deleted ? (
                <li key={index} className="list-group-item">
                  Row {element.index} deleted at {element.currentDateInfo}
                </li>
              ) : (
                <li key={index} className="list-group-item">
                  Row {element.index} restored at {element.currentDateInfo}
                </li>
              );
            }
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Products;
