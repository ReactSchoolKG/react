import React from 'react';
import productList from './ProductService.js'


export default class Product extends React.Component{
constructor(props){
  super(props);
}

getData(id){
  for (let i=0; i<productList.length; i++){
    console.log(productList[i])
              if (productList[i].id == id){
                return productList[i];
              }
           }
}

  render(){
    return(
      <div>
        <p>This is the product {this.props.match.params.id}</p>
        <p>Name: {this.getData(this.props.match.params.id).name}</p>
        <p>Description: {this.getData(this.props.match.params.id).desc}</p>
        <p>Price: {this.getData(this.props.match.params.id).price} grn</p>
      </div>
    )
  }
}