import React from 'react';

const HistoryList = ({ history }) => {        
  if(history.access) {
    return <li>{`${history.listName} removed at ${history.time}`}</li>
  }
  return <li>{`${history.listName} restore at ${history.time}`}</li>
}

export default HistoryList;