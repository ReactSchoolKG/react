import React from 'react';

const ProductItem = ({ item, onDismiss, access }) => {
  return (    
    <tr>
      <td>
        {access && item}
      </td>
      <td>  
        <button className="button-inline" type="button" onClick={onDismiss}>
          {access ? 'Dismiss' : 'Show'}
        </button>
      </td>
    </tr> 
  )
}


export default ProductItem;