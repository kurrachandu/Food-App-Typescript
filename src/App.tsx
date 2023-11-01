import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';
import CartPage from './components/pages/Cart/CartPage';
import Create from './components/pages/Auth/Create';
// import Login from './components/pages/Auth/PostLogin';
import Success from './components/pages/Logout/Success';
import PostLogin from './components/pages/Auth/PostLogin';
import Navbar from './Navbar';
import OrdersPage from './components/pages/Orders/OrdersPage';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/login' element={<PostLogin />} />
        {/* <Route path='/header' element={<Header />} /> */}
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/menu" element={<MenuPage />} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;