import React, {Component} from 'react';
import ProductItem from '../ProductItem/productItem';
import HistoryList from '../ProductHistory/productHistory';

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
      list,
      history:[]
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(item){
    let newList = this.state.list.slice(); 
    const index = newList.indexOf(item);
    newList[index].isAccess = !item.isAccess;
    
    let time = new Date().toLocaleTimeString();
    const newHistoryEl = {
      listName: item.name,
      time: time,
      access: !item.isAccess
    }

    const newHistory = [...this.state.history, newHistoryEl];
    this.setState({ 
      list: newList,
      history: newHistory
    });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.list.map((item,id) => 
              <ProductItem
                key={id}
                item={item.name}
                access={item.isAccess}
                onDismiss={() => this.onDismiss(item)}
              />
            )}
          </tbody>
        </table>
        <div className="history_list">
          <ul>
            {this.state.history.map((item, id) => 
              <HistoryList 
                key={id}
                history={item}
              />
            )}
          </ul>
        </div>
     </div>
    )
  }
}

export default ProductList;