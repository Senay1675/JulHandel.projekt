import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

const ProductPage = () => {
  return (
    const [products, setproducts] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/vehicles')
        .then(response => {
          setVehicles(response.data);
        })
        .catch(error => {
          console.error('Error fetching vehicles:', error);
        });
    }, []);
  <>
  <div>ProductPage</div>
  <h1>Welcome to the product page</h1>

  </>
  )
}

export default ProductPage