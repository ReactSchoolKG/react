import React from 'react';

const History = ({ historyData }) => {
  return historyData.map((element, index) => {
    return (
      <li key={index} className="list-group-item">
        Row {element.index} {element.deleted ? 'restored' : 'deleted'} at{' '}
        {element.currentDateInfo}
      </li>
    );
  });
};

export default History;
