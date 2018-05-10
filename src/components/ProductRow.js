import React from 'react';
import { Button } from 'react-bootstrap';

const ProductRow = ({ productData: { id, isDeleted, name }, toggleProduct, handleShowMore, }) => (
  <tr>
    <td>{id}</td>
    <td>{!isDeleted && name}</td>
    <td>
      <Button
        bsStyle="danger"
        onClick={() => toggleProduct(id, isDeleted)}
      >
        {!isDeleted ? `delete` : `restore` }
      </Button>
      <Button
        bsStyle="success"
        onClick={() => handleShowMore(id)}
      >
        show more
      </Button>
    </td>
  </tr>
)

export default ProductRow;
