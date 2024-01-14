import React, { useEffect } from 'react';
import { useCart } from '../CartContext';
import image from '../../public/profile.jpg'
const ShoppingCart = () => {
  const { state, dispatch } = useCart();

  // Load cart items from local storage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    dispatch({ type: 'SET_CART', payload: savedCart });
  }, [dispatch]);

  const handleIncrease = (productId) => {
    const existingItemIndex = state.cart.findIndex((item) => item.id === productId);
    if (existingItemIndex !== -1) {
      dispatch({ type: 'INCREASE_QUANTITY', payload: productId });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { id: productId, quantity: 1 } });
    }

    // Update local storage with the latest cart state
    localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
  };

  const handleDecrease = (productId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: productId });

    // Update local storage with the latest cart state
    localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
  };

  const handleRemove = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });

    // Update local storage with the latest cart state
    localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
  };

  const handleCheckout = () => {
    // Simulate checkout logic
    alert('Thank you for your purchase!');
    // Reset the cart after checkout
    dispatch({ type: 'RESET_CART' });

    // Clear local storage after checkout
    localStorage.removeItem('shoppingCart');
  };

  const uniqueCartItems = Array.from(new Set(state.cart.map((item) => item.id)))
    .map((id) => state.cart.find((item) => item.id === id));

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {uniqueCartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {uniqueCartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <div className="flex items-center">
                  <img src={image} alt={item.name} className="mr-4 w-12 h-12" />
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button onClick={() => handleDecrease(item.id)} className="mr-2">
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)} className="ml-2">
                    +
                  </button>
                  <button onClick={() => handleRemove(item.id)} className="ml-4 text-red-500">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-semibold">
              Total: ${uniqueCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
            <button onClick={handleCheckout} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
