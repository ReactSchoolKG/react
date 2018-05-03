import React, {Component} from 'react';

export default class ProductItem extends Component{
	render(){
		let product=this.props.product;
		return(
				<tr>
				   <td>{product.isShow && product.productName}</td>
				   <td>
				   	<button onClick={() => this.props.removeItem(product)}>
				   	  {product.isShow ? "Remove" : "Return"}
				   	</button>
				   </td>
				</tr>
		);

	}
}