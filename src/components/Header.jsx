import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Shopping Store
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart {cartCount > 0 && `(${cartCount})`}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;