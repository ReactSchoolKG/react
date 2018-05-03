import React from 'react';

let productItem = (props) => {
    
    return (
        <li>
           {props.productItem}
           <button onClick={props.deleteProduct}>Delete</button>
        </li>
    );
};
export default productItem;