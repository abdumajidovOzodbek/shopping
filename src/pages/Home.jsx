import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ addToCart }) => {
  
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to our Shopping Store</h1>
      {/* Make sure addToCart is passed down as a prop */}
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;