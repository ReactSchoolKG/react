import React, { Component } from "react";
import "./App.css";
import Product from "./components/Product/productList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div className="homeComponent">
    <h2>Home Page</h2>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="container">
          <ul className="mainNav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/products" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;
