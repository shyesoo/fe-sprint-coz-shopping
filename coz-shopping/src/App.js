import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter ,Routes, Route, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

import Header from './Header';
import Footer from './Footer';
import Main from './pages/Main'
import Products from './pages/Products';
import Bookmarks from './pages/Bookmarks';

import { getProducts } from './apis/api';

export const loader = async () => {
  return await getProducts();
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Main products={products}/>} />
          <Route path="/products/list" element={<Products products={products} />} />
          <Route path="/bookmark" element={<Bookmarks />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
