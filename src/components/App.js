import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </ BrowserRouter>
)

export default App;
