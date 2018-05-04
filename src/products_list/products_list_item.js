import React from 'react';
import {withStyles} from 'material-ui';

const styles = theme => ({
        delete: {
        textDecoration: 'line-through',
    },
})

 class ProductItem extends React.Component {
    state = {
      isDeleted: false
    };


    toggle = () => {
      this.setState({isDeleted: !this.state.isDeleted})
    };

render(){

const {productName,isDeleted,classes} = this.props

      return (
        <li>
           <span className={this.state.isDeleted && classes.delete}>{productName}</span>
          {this.state.isDeleted ? <button type='submit' onClick={this.toggle.bind(this)}>Відновити</button> : <button type='submit' onClick={this.toggle.bind(this)}>Видалити</button>}
        </li>
    );
}

};

export default withStyles(styles)(ProductItem)