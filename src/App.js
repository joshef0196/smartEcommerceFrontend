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

function App() {
  return (
    <BrowserRouter>
        {/* <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='/shop' element={<Shop />}> </Route>
                <Route path='/category' element={<Category />}> </Route>
                <Route path='/blogs' element={<Blog />}> </Route>
                <Route path='/about' element={<About />}> </Route>
                <Route path='/contact-us' element={<Contact />}> </Route>
                <Route path='/wishlist' element={<Wishlist />}> </Route>
            <Footer />
        </Routes> */}
        <Header /> {/* This header will now be fixed across all routes */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/category' element={<Category />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
        <Footer /> {/* This footer will also be fixed across all routes */}
    </BrowserRouter>  
  );
}

export default App;
