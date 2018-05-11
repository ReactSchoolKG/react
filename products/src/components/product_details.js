import React from "react";
import productService from "./../ProductsService";


export default class productDetails extends React.Component {

  render(){
  
    const product = productService.products[this.props.match.params.id];  
    return (
        <div>
            <h1>Product details</h1>          
            <p>name: {product.name} </p>
            <p>status: {product.status ? "available" : "unavailable"}</p>
            <p>Shop: {product.banner} </p>
            <p>Max Price: {product.maxPrice} </p>
            <p>Min Price: {product.minPrice} </p>
            <p>AveragePrice: {product.averagePrice} </p>
        
        </div>
      );
  }

};

