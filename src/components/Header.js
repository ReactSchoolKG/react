import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul className="main-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;