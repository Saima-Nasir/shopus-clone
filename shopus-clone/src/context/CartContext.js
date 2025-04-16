import React, { createContext, useState } from 'react';

  export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
} 
 
/*  export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
} */
/* function App() {
  return (
    <div className="p-4">
      <nav className="mb-4 space-x-4">
        <Link to="/Home" className="text-blue-600 underline">
          Home
        </Link>
        <Link to="/Shop" className="text-blue-600 underline">
          Shop
        </Link>
        <Link to="/Cart" className="text-blue-600 underline">
          Cart
        </Link>
      </nav>
      <Routes>
        <Route path="/Home" element =  {<home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
); */