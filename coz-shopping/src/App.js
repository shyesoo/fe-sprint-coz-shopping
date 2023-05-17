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
  const [isBookmarked, setIsBookmarked] = useState([]);
  const [bookmarkedProducts, setBookmarkedProducts] = useState(localStorage.getItem("bookmarks"));

  useEffect(() => {
    axios
      .get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  },[]);

  useEffect(() => {
    const bookmarkList = localStorage.getItem('bookmarks');
    if (bookmarkList) {
      setBookmarkedProducts(JSON.parse(bookmarkList));
    }
  }, [bookmarkedProducts]);


  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Main 
            products={products}
            isBookmarked={isBookmarked}
            setIsBookmarked={setIsBookmarked}
            />} />
          <Route path="/products/list" element={<Products 
            products={products}
            isBookmarked={isBookmarked}
            setIsBookmarked={setIsBookmarked}
            />} />
          <Route path="/bookmark" element={<Bookmarks
            products={products}
            isBookmarked={isBookmarked}
            setIsBookmarked={setIsBookmarked}
            />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
