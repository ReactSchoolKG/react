import React, { Component } from "react";
import "./App.css";
import Product from "./components/Product/productList";
import productItemDetails from "./components/Product/ProductItemDetails";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Product} />
            <Route path="/products/:id" component={productItemDetails} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const NoMatch = ({ location, match }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
