import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
 import Home from './pages/Home';
 import Shop from './pages/Shop';
 import Cart from './pages/Cart';
 import ProductDetail from './pages/ProductDetail';

 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 
export default App;  
/* function App() {
  return (
    <>
      <Header />
      <Routes>
     <Route path="/Home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
    </>
  );
}
 
export default App; */