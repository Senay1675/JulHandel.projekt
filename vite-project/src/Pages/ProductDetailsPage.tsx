

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header/Header';

const ProductDetailsPage = ({ products }) => {
  const { id } = useParams(); // Hämta produktens ID från URL:en
  const product = products.find((item) => item.id === id); // Hitta produkten baserat på ID

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
    <Header/>
    <div className="product-details">
      <h1>{product.name}</h1>
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        style={{ width: "300px", height: "300px" }} 
      />
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>

    </>
  );
};

export default ProductDetailsPage;

