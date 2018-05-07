import React from 'react';

export default class ProductItem extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.product.del || this.props.product.name}</td>
				<td>
					<button onClick={this.props.delRow}>
						Delete/Restore
          </button>
				</td>
			</tr>
		)
	}
};