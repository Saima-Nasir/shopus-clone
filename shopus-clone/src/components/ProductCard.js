/* const products = [
    {
      id: 1,
      title: "Sneaker A",
      price: 49.99,
      image: "/assets/shoe1.jpg"
    },
    // more products...
  ]; */
  
 /// export default products;

 import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card" style={{ border: '1px solid #ccc', padding: 20, width: 250 }}>
      <img src={product.image} alt={product.title} style={{ width: '100%' }} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;