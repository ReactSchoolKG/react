import React from 'react';

export default class DeleteButton extends React.Component {

  render(){
    return (
      <button onClick={this.props.clickHandler} >{this.props.name}</button>
      );
  }
}
