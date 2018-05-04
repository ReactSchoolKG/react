import React from 'react';
import './App.css';
import NestedComponentsExample from './nesting_components/nested_components_main_container';
import ComponentStateAndInteractions from './component_state_and_interactions/component_state_and_interactions_main_container';
import ConditionalRendering from './conditional_rendering/conditional_rendering_main_container';
import ProductList from'./productList.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProduct: true
        };
    }


    render() {


        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to KindGeek React School</h1>
                </header>
                <NestedComponentsExample/>
                <ComponentStateAndInteractions/>
                <ConditionalRendering/>
                <ProductList/>
            </div>
        );
    }
}

export default App;
