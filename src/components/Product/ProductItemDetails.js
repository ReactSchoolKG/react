import React from "react";
import productService from "../productService";

const productItemDetails = ({ match }) => {
  const itemDetails = productService.getProducts(match.params.id);
  return (
    <div className="productItemDetails">
      <h3>Product details: </h3>
      <ul>
        <li> Item name: {itemDetails.name} </li>
        <li>Item status: {itemDetails.status ? "available" : "unavailable"}</li>
        <li> Shop: {itemDetails.banner} </li>
        <li> MaxPrice: {itemDetails.maxPrice} </li>
        <li> MinPrice: {itemDetails.minPrice} </li>
        <li> AveragePrice: {itemDetails.averagePrice} </li>
      </ul>
    </div>
  );
};

export default productItemDetails;
