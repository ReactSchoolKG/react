import React from 'react';
import  {Link } from 'react-router-dom';

const Home = () => (
  <main>
    <h1>It's Home Page</h1>
    <p>A multiple fruit is one formed from a cluster of flowers (called an inflorescence). Each flower produces a fruit, but these mature into a single mass. Examples are the pineapple, fig, mulberry, osage-orange, and breadfruit.</p>
    <Link to="/products" className="btn-go-to-products">
      Go to products
    </Link>
  </main>
);

export default Home;
