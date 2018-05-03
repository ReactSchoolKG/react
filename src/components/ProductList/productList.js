import React, {Component} from 'react';
import ProductItem from '../ProductItem/productItem';

const list = [
  {name: 'Apple', isAccess: true},
  {name: 'Peanuts', isAccess: true},
  {name: 'Orange', isAccess: true},
  {name: 'Potate', isAccess: true},
  {name: 'Cheese', isAccess: true}
]

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(item){
    let newList = this.state.list.slice(); 
    const index = newList.indexOf(item);
    newList[index].isAccess = !item.isAccess;
    this.setState({ 
      list: newList 
    });
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.list.map((item,id) => 
            <ProductItem
              key={id}
              item={item.name}
              access={item.isAccess}
              onDismiss={() => this.onDismiss(item)}
            >
            </ProductItem>
          )}
        </tbody>
      </table>
    )
  }
}

export default ProductList;