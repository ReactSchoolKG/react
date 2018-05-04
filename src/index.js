import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import PRODUCTS from './ListProductsJSON';
import './index.css';

render(
  <App products={PRODUCTS} />,
  document.getElementById(`root`)
);
