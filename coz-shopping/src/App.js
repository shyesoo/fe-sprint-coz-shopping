import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter ,Routes, Route, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const notify = (e) => {
    if(e === 'on') toast("📌 북마크에 저장되었습니다.");
    else if(e === 'off') toast("🫥 북마크가 해제되었습니다.");
  }

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
            notify={notify}
            />} />
          <Route path="/products/list" element={<Products 
            products={products}
            isBookmarked={isBookmarked}
            setIsBookmarked={setIsBookmarked}
            notify={notify}
            />} />
          <Route path="/bookmark" element={<Bookmarks
            products={products}
            isBookmarked={isBookmarked}
            setIsBookmarked={setIsBookmarked}
            notify={notify}
            />} />
        </Routes>
        <Footer />
      </div>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer 
          position="bottom-right"
          limit={4}
          pauseOnFocusLoss
          autoClose={3000}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
