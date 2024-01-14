import React from 'react';

const Checkout = ({ cart }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add items before proceeding to checkout.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="mr-4 w-12 h-12" />
                  <span>{item.name}</span>
                </div>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-semibold">Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
