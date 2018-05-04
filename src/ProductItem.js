import React from 'react';
import DeleteButton from './deleteButton';

export default class ProductItem extends React.Component {
  constructor(props) {
      super(props);
      console.log(props)

      this.state = {
        buttonName: 'Delete',
        productName: props.element
    }
  }


    onButtonChange() {
      if (this.state.buttonName === 'Delete') {
        this.setState({ 
        buttonName: 'Restore',
        productName: '',
         })
      } else {
        this.setState({
          buttonName: 'Delete',
          productName: this.props.element

        })
      }
    }

  render() {
    
    return (
      <div> 
        <span>{this.state.productName}</span>
        <DeleteButton clickHandler={this.onButtonChange.bind(this)} name={this.state.buttonName}>
        </DeleteButton>
      </div>
      )
  }
}
