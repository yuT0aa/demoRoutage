import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Pages/ProductList';
import ProductForm from './Pages/ProductForm';

const initialState=[
  { id: 1, name: 'Clavier Mécanique', price: 450 },
  { id: 2, name: 'Souris Sans Fil', price: 200 },
];

function productReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'UPDATE_PRODUCT':
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    case 'DELETE_PRODUCT':
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
}
function App() {
  const [products, dispatch] = useReducer(productReducer, initialState);

    return (
      <div>
        <Navbar />
        {/* 4.e : Retourner la liste des routes[cite: 1] */}
        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} dispatch={dispatch} />}
          />
          <Route
            path="/add-product"
            element={<ProductForm products={products} dispatch={dispatch} />}
          />
          <Route
            path="/edit-product/:id"
            element={<ProductForm products={products} dispatch={dispatch} />}
          />
        </Routes>
      </div>
    );
}

export default App;