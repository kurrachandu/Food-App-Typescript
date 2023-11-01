import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';
import CartPage from './components/pages/Cart/CartPage';
import Create from './components/pages/Auth/Create';
import Success from './components/pages/Logout/Success';
import PostLogin from './components/pages/Auth/PostLogin';
import OrdersPage from './components/pages/Orders/OrdersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/login' element={<PostLogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;