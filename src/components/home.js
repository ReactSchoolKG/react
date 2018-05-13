import React from 'react';
import  {Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home Page</h1>
  
    <Link to="/products">
      My products
    </Link>
  </div>
);
export default Home;