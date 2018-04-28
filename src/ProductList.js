import React, { Component } from 'react';
import './App.css';

const Button = ({ onClick, className='', children }) => {
  return (
    <button
    onClick={onClick}
    type="button"
    className={className}>
      {children}
    </button>
  )
}

const Product = ({ item, onDismiss}) => {
  return (
    <tr>
      <td>
        {item}       
      </td>
      <td>
        <Button
          onClick={() => onDismiss(item)}
          className='button-inline'>
          Dismiss
        </Button>
      </td>
    </tr>    
  )
}

const list = ['Apple', 'Peanuts', 'Orange', 'Potate', 'Cheese'];

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list
    }
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(item){
    const updateList = this.state.list.filter(itemList => itemList !== item);
    this.setState({ list: updateList });
  }
  
  render() {
    const { list } = this.state;
    return (
      <div>
        <h1>Product List</h1>
        <table>
          <tbody>
            {list.map((item,id) => 
              <Product
                key={id}
                item={item}
                onDismiss={this.onDismiss}
              >
              </Product>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}


export default ProductList;
