import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import ProductTable from './components/ProductTable';
import PRODUCTS from './ListProductsJSON';
import './index.css';

render(
  <ProductTable products={PRODUCTS} />,
  document.getElementById(`root`)
);
