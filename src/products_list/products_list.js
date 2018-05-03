import React from 'react';
import ProductItem from './products_list_item';

class ProductList extends React.Component {
   
   state = {
    products: ["Apple","Orange","Onion","Cucumber"]
   }


   deleteProduct = (index) => {
    const products = [...this.state.products];
    products.splice(index,1);
    this.setState({products});
   };

    render() {

        return (
            <div>
                <ul>
                    {this.state.products.map((product,index)=><ProductItem 
                                                                    key={index}     
                                                                    productItem={product} 
                                                                    deleteProduct={(e)=>this.deleteProduct(index)}/>)}
                </ul>
            </div>
        );
    }
}

export default ProductList;
