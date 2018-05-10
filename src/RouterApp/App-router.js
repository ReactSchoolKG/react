import React from 'react';
import './App.css';
// import BasicExample from './BasicExample.js'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './nesting_components/home.js';
import Products from './nesting_components/products.js';
import Topics from './nesting_components/topics.js';
import Product from './nesting_components/product.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {

        return (
              <Router>
                <div>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/products">Products</NavLink>
                    </li>

                  </ul>

                  <hr />

                  <Route exact path="/" component={Home} />
                  <Route path="/products" component={Products} />
                  <Route path="/products/:id" component={Product} />
                </div>
              </Router>
            );



    }
}

export default App;
