import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { cartReducer, initialCartState } from './cartReducer';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    fetch('http://localhost:3101/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Erreur de chargement :", err));
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <Navbar totalItems={totalItems} />
      <div className="container pb-5">
        <Routes>
          <Route 
            path="/" 
            element={<ProductList products={products} dispatch={dispatch} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetails products={products} dispatch={dispatch} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cart={cart} dispatch={dispatch} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}