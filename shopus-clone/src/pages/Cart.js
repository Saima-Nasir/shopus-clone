import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

 function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
            <h4>{item.title}</h4>
            <p>Price: ${item.price} | Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;
 