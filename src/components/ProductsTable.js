import React from 'react';
import { Table } from 'react-bootstrap';

import ProductRow from './ProductRow';

const ProductsTable = ({ products, toggleProduct, handleShowMore, }) => (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <td>id</td>
        <td>Name</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody>
      {
        products.map(product => (
          <ProductRow
            productData={product}
            key={product.id}
            toggleProduct={toggleProduct}
            handleShowMore={handleShowMore}
          />
        ))
      }
    </tbody>
  </Table>
);

export default ProductsTable;
