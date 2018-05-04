import React from 'react';
import Items from './items';
//import "./items.css";

export default class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            products: [
                {id: 1, name: "Apple", isDeleted: false},
                {id: 2, name: "Peanut", isDeleted: false},
                {id: 3, name: "Milk", isDeleted: false},
                {id: 4, name: "Bread", isDeleted: false}
            ],

            history:[]

        };

    }

    editItem = (index) => {
        let products = this.state.products;

        if(products[index].isDeleted){
            products[index].isDeleted = false;
            this.setState({products});
         }
         else {
            products[index].isDeleted = true;
            this.setState({products});
        }

        let history = {
            id: index,
            name: products[index].name,
            isDeleted: products[index].isDeleted,
            editTime: `${new Date().toLocaleDateString()}--${new Date().toLocaleTimeString()}`
        };
        let insertHistory = this.state.history.concat(history);

         this.setState({history:insertHistory});
         console.log(this.state.history);

    };



    render(){

        return <div>

            <div>
                <h1 className='head'>Products:</h1>
            <ul>
                {

                    this.state.products.map((product, index) => {

                        return (<Items
                            status = {product.isDeleted}
                            key={product.id}
                            delEvent={this.editItem.bind(this, index)}>
                            {(product.isDeleted)? <span className='deleted'>{product.name}</span>: product.name}
                                    </Items>);
                    })
                }
            </ul>
        </div>

            <div className='list'>
                <h3  className='head'>History:</h3>
                <ul id = 'history'>
                {

                    this.state.history.map((history) => {

                        return ( <div>
                                <li key={history.id}>{(history.isDeleted)? <span>
                                {`'${history.name}': deleted - ${history.editTime}`}
                                </span>: <span>
                                {`'${history.name}': restored - ${history.editTime}`}
                            </span>}
                                </li>
                            </div>
                        );
                    })
                }
            </ul>
            </div>

        </div>
    }
}
