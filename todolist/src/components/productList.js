import React from 'react';
import Items from './items';
//import "./items.css";

export default class ProductList extends React.Component{



    constructor(props){
        super(props);
        this.state = {
            products: [
                {id: 1, name: "Apple"},
                {id: 2, name: "Peanut"},
                {id: 3, name: "Milk"},
                {id: 4, name: "Bread"}
            ]
        }

    }
    deleteItems = (index) => {
        const products = Object.assign([], this.state.products);
        products.splice(index, 1);
        this.setState({products});


    };

    render(){

        return(
            <div className='list'>
              <ol>
                {
                    this.state.products.map((product, index) => {
                        return(<Items
                            key = {product.id}
                            delEvent ={this.deleteItems.bind(this, index)}>
                            {product.name}
                            </Items>);
                    })

                }

              </ol>
            </div>
        );
    }
}
