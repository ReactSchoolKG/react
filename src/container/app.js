/**Systems */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**Components */
import Product from '../components/Product/product';
import HomePage from '../components/HomePage/home';
import ProductDetails from '../components/ProductDetails/productDetails';
import NavBar from '../components/NavBar/navBar';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/product" component={Product} />
            <Route path="/product/:id" component={ProductDetails} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
