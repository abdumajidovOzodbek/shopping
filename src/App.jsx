import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import { CartProvider } from './CartContext';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartProvider>
      <Router>
        <div className="font-sans">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home addToCart={addToCart} />
            </Route>
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;