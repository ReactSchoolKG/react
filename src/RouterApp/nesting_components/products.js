import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import productList from './ProductService.js'



export default class Products extends React.Component{
  render(){
    return(
      <div>
        <h2>Products</h2>
        <ul>
          {
            productList.map(item => <li key={item.id}> 
              <Link to={`${this.props.match.url}/${item.id}`} >{item.name}
              </Link>
              </li>)
          }
        </ul>

      </div>
    )
  }
}