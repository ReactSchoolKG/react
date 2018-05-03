import React from 'react';

const StoryList = ({ historyData, productData }) => (
  <ul>
    {historyData.map(
      (h, index) => (
        <li key={index}>
          {`${(productData.find(obj => obj.id === h.id)).name} was ${h.isDeleted ? `updated` : `deleted`} ${h.time}`}
        </li>
      )
    )}  
  </ul>
);

export default StoryList;
