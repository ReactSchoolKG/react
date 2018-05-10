import React from 'react';
import ContextNestedItem from './context_nested_item';
import MainComponent from './context_provider';
// import {Context} from './context';

export const Context = React.createContext();

export default class ContextExample extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            someProp:'I am a test property',
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
                <div className="app-block">
                    <h4>This is a context API example</h4>
                    <ContextNestedItem/>
                </div>
            </Context.Provider>

        );
    }
}


