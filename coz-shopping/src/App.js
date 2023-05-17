import './App.css';
import React from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Main from './pages/Main'
import Products from './pages/Products';
import Bookmarks from './pages/Bookmarks';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<Products />} />
          <Route path="/bookmark" element={<Bookmarks />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
