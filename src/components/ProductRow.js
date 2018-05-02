import React from 'react';
import { Button } from 'react-bootstrap';

const ProductRow = ({ position, name, handleRowDel, children }) => (
  <tr>
    <td>{position}</td>
    <td>{name}</td>
    <td>
      <Button
        bsStyle="danger"
        onClick={() => handleRowDel(position)}
      >
        {children}
      </Button>
    </td>
  </tr>
)

export default ProductRow;
