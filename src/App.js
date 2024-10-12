import './App.css';  
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/shop' element={<Shop />}> </Route>
        </Routes>
    </BrowserRouter> 
    // <Home />
  );
}

export default App;
