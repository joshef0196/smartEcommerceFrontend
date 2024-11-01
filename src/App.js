import './App.css';  
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Category from './pages/Category';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Header from './pages/Header'
import Footer from './pages/Footer'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <BrowserRouter> 
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/category' element={<Category />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/product' element={<SingleProduct />} />
        </Routes>
        <Footer />
    </BrowserRouter>  
  );
}

export default App;
