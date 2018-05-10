import React from 'react';

export default class HttpCallExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

        this.storeProducts = this.storeProducts.bind(this);
    }


    storeProducts(data) {
        console.log(data);
        let products = data.data;
        this.setState({products});
    }

    getData() {
        let self = this;
        fetch('http://159.89.106.160/products')
            .then(response => response.json())
            .then(this.storeProducts);
    }

    postData() {

        fetch('http://159.89.106.160/products/sendemail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                to: 'andriyshcherbyak@gmail.com',
                dates: '26/02/2018 - 29/04/2018',
                data: [
                    {max: 9, min: 3, name: 'McCafe'}
                ],
                product: "Americano"
            })
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            });
    }


    render() {

        return (
            <div className="app-block">
                <h4> This is a http request example</h4>

                {this.state.products.map(
                    (el, i) => <div key={i}>{el.name}</div>)
                }
                <button onClick={() => this.getData()}>Get Data</button>

                <button onClick={this.postData}>Post data</button>

            </div>
        );
    }
}
