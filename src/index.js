import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './components/Product/product';
import Product from './components/Product/product';

ReactDOM.render(<Product />, document.getElementById('root'));
registerServiceWorker();
