import React from 'react';
import { Table } from 'react-bootstrap';

import { getOne } from '../ProductsService';

const ProductDetails = ({ match: { params }, history }) => {
  const targetProduct = getOne(+params.id);

  return(
    <div>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Status</td>
            <td>Banner</td>
            <td>Min price</td>
            <td>Max price</td>
            <td>Average price</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{targetProduct.id}</td>
            <td>{targetProduct.name}</td>
            <td>{targetProduct.isDeleted? `deleted` : `restored`}</td>
            <td>{targetProduct.banner}</td>
            <td>{targetProduct.minPrice}</td>
            <td>{targetProduct.maxPrice}</td>
            <td>{(targetProduct.minPrice + targetProduct.maxPrice) / 2}</td>
          </tr>
        </tbody>
      </Table>
      <button 
        onClick = {() => history.goBack()}
        className="btn-go-to-products">
        Go to products
      </button>
    </div>
  )
}; 

export default ProductDetails;
