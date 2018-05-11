import React, { Component } from "react";
import ProductItem from "../Product/productItem";
import HistoryList from "../Product/productHistory";
import ProductItemDetails from "../Product/ProductItemDetails";
import productService from "../productService";
import { Route } from "react-router-dom";

const list = [
  {
    name: "Apple",
    status: true,
    banner: "Silpo",
    maxPrice: 10,
    minPrice: 5,
    averagePrice: 7
  },
  {
    name: "Peanuts",
    status: true,
    banner: "Rukavuchka",
    maxPrice: 13,
    minPrice: 9,
    averagePrice: 11
  },
  {
    name: "Orange",
    status: true,
    banner: "ATB",
    maxPrice: 20,
    minPrice: 15,
    averagePrice: 17
  },
  {
    name: "Potate",
    status: true,
    banner: "Silpo",
    maxPrice: 5,
    minPrice: 2,
    averagePrice: 3
  },
  {
    name: "Cheese",
    status: true,
    banner: "ATB",
    maxPrice: 8,
    minPrice: 2,
    averagePrice: 5
  }
];

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      history: []
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.btnClear = this.btnClear.bind(this);
  }

  onDismiss(item) {
    let newList = this.state.list.slice();
    const index = newList.indexOf(item);
    newList[index].status = !item.status;

    let time = new Date().toLocaleTimeString();
    const newHistoryEl = {
      listName: item.name,
      time: time,
      access: !item.status
    };

    const newHistory = [...this.state.history, newHistoryEl];
    this.setState({
      list: newList,
      history: newHistory
    });
    productService.list[index].maxPrice = 20;
    productService.list[index].status = !productService.list[index].status;
  }

  btnClear() {
    this.setState({ history: [] });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="tableBlock">
          <h1>Product List</h1>
          <h5>(Click product for detailed information)</h5>
          <table>
            <tbody>
              {this.state.list.map((item, id) => (
                <ProductItem
                  key={id}
                  item={item.name}
                  access={item.status}
                  match={this.props.match}
                  index={id}
                  onDismiss={() => this.onDismiss(item)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="history_list">
          <h1>History list</h1>
          <button className="btnClear" type="button" onClick={this.btnClear}>
            Clear
          </button>
          <ul>
            {this.state.history.map((item, id) => (
              <HistoryList key={id} history={item} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
