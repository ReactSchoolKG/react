import React from "react";

import ProductItem from "./products_list_item";

class ProductList extends React.Component {
    state = {
        products: ["Apple", "Orange", "Onion", "Cucumber"]
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map((product, index) => (
                        <ProductItem key={index} productName={product} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default ProductList;
