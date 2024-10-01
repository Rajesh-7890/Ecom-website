import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footbar';
import Card from 'antd/es/card/Card';
import './App.css';
import Cart from './pages/CartPage';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  const incrementCartCount = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const addToCart = product => {
    if (!cart.some(cartProduct => cartProduct.id === product.id)) {
      setCart(prevCart => [...prevCart, product]);
      incrementCartCount();
    }
  };
  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={<Home cart={cart} onAddToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;
