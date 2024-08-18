
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Profile from './pages/Profile/Profile.js';
import Cart from './pages/Cart/Cart.js'
import { useState } from 'react';
import Home from './pages/Home/Home.js';

function App() {
  const [cartItems, setCartItems]=useState([])

  const addtoCart = (items) => {
    setCartItems((prevItems) => [...prevItems, items]);
}

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='home' element={<Home addtoCart={addtoCart}/>}/>
        <Route path='cart' element={<Cart cartItems={cartItems}/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
 