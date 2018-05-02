import React, { Component } from 'react';
import Header from "./components/header";
import ProductList from "./components/productList";
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
          <div className="todo-wrap">
           <Header />
            <ProductList/>
          </div>

      </div>
    );
  }
}

export default App;
