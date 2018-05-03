import React from 'react';
import ProductsList from './products_list/products_list'
import './App.css';

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
                    <h1 className="App-title">Homework for KindGeek React School</h1>
                    <h3>Products list</h3>
                </header>
                <main>
                    <ProductsList/>
                </main>
            
            </div>
        );
    }
}

export default App;
