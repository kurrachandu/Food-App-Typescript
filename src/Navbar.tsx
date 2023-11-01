import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(): JSX.Element {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        {/* <li><Link to="/menu">Menu</Link></li> */}
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/success">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
