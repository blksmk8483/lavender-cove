import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Plants from './components/Plant/Plant';


function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/plant' element={<Plants />} />

        </Routes>
    )
};

export default App;