
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductPage from './Pages/ProductPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import { CartProvider } from './Components/Cart/Cart';
import CartPage from './Pages/Cartpage';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  // Hämta produkter från API
  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((response) => {
        console.log('API Response:', response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        {/* Skicka `products` som en prop till båda sidor */}
        <Route path="/" element={<ProductPage products={products} />} />
        <Route path="/products/:id" element={<ProductDetailsPage products={products} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;

