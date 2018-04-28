import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Product from './components/Product/product';

ReactDOM.render(<Product />, document.getElementById('root'));
registerServiceWorker();
