import React from "react";
import productsService from "../productsService";

const productItemDetails = ({ match }) => {
  const itemDetails = productsService.getProduct(match.params.id);
  return (
    <div>
      <h3>Product details: </h3>
      <ul>
        <li> Item name: {itemDetails.name} </li>
        <li>
          Item status: {itemDetails.deleted ? "not available" : "available"}
        </li>
        <li> Shop: {itemDetails.banner} </li>
        <li> MaxPrice: {itemDetails.maxPrice} </li>
        <li> MinPrice: {itemDetails.minPrice} </li>
        <li> AveragePrice: {itemDetails.averagePrice} </li>
      </ul>
    </div>
  );
};

export default productItemDetails;
