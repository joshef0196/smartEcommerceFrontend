import './App.css';  
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Category from './pages/Category';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/shop' element={<Shop />}> </Route>
            <Route path='/category' element={<Category />}> </Route>
            <Route path='/blogs' element={<Blog />}> </Route>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/contact-us' element={<Contact />}> </Route>
            <Route path='/wishlist' element={<Wishlist />}> </Route>
        </Routes>
    </BrowserRouter>  
  );
}

export default App;
