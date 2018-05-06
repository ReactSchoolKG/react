import React from 'react';

export default class HistorySheet extends React.Component {

  render(){
    return (
      <div className="history">
        <h4 className="history-header">This is the history of operations:</h4>
        {this.props.children}
      </div>
      );
  }
}
