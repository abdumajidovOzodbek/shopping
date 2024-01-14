import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { products } from '../../data';
import image from '../../public/profile.jpg'

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();

  // Fetch product details from a backend or use dummy data


  // Find the product with the given id
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    // Handle the case where the product with the given id is not found
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    // Dispatch the ADD_TO_CART action to update the cart in the context
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <img src={image} alt={product.name} className="mr-8" />
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-4">${product.price}</p>
          <p className="mb-4">{product.info}</p>
          <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;