import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { products } from '../../data';


const ProductList = ({ addToCart }) => {
  const {dispatch}=useCart()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={'https://files.fm/f/n8dwr2uhjt'} alt={product.name} className="mb-4 rounded-md" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() =>  dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } })}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {/* {console.log(product)} */}
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="block mt-2 text-sm text-blue-500">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;