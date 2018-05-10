import React from 'react';
import {Context} from './context_main_container';


export default class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: ['Mango', 'Apple', 'Cake']
        }
    }


    addProduct() {
        let products = this.state.products.slice();
        products.push('Coconut');
        this.setState({products});
    }


    render() {

        let valueObj = {...this.state, addProduct: () => this.addProduct()};

        return (
            <Context.Provider value={valueObj}>
                {this.props.children}
            </Context.Provider>
        );
    }
}


