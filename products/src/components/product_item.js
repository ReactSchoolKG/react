import React, {Component} from 'react';

export default class ProductItem extends Component{
	render(){
		let product=this.props.product;
		return(
				<tr>
				   <td>{product}</td>
				   <td>
				   	<button onClick={() => this.props.removeItem(product)}>
				   	  Remove
				   	</button>
				   </td>
				</tr>
		);

	}
}