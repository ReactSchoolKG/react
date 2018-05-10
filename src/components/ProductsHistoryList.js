import React from 'react';

const ProductsHistoryList = ({ historyData, productData }) => (
  historyData.length>0 &&
  <ul>
    {historyData.map(
      (h, index) => (
        <li key={index}>
          {`${(productData.find(obj => obj.id === h.id)).name} was ${h.isDeleted ? `deleted` : `restored`} on ${h.time}`}
        </li>
      )
    )}  
  </ul>
);

export default ProductsHistoryList;
