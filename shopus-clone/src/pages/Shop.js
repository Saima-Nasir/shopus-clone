// src/pages/Shop.js
import React from 'react';
import product from '../data/product';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

 function Shop() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shop All Products</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 
  

export default Shop;