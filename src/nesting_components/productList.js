import React from 'react';
import ProductItem from './productItem.js'

export default class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productsList: [{ name: 'Apple', del: false },
			{ name: 'Lemon', del: false },
			{ name: 'Potato', del: false },
			{ name: 'Strawberry', del: false },
			{ name: 'Cherry', del: false }
			],
			history: []
		};
	}

	deleteRestore(i) {
		const productsList = [...this.state.productsList];
		let history = this.state.history;
		let historyrecord = new Date();
		let historyrecords;
		if(productsList[i].del){
			historyrecords = productsList[i].name + ' was restored ' + historyrecord.toLocaleDateString() + ' ' + historyrecord.toLocaleTimeString();
		}
		else{
			historyrecords = productsList[i].name + ' was deleted ' + historyrecord.toLocaleDateString() + ' ' + historyrecord.toLocaleTimeString();
		}
		productsList[i].del = !productsList[i].del;
		history.push(historyrecords);

		this.setState({
			history,
			productsList
		});
	}

	render() {
		return (
			<div>
				<table>
					<tbody>
						{this.state.productsList.map((el, i) => <ProductItem product={el} key={i} delRow={() => this.deleteRestore(i)}/>)}
					</tbody>
				</table>
				<div>
					<ul>
						{this.state.history.map((el,i) => <li key={i}>{el}</li>)}
					</ul>
				</div>
			</div>
		);
	}
}
