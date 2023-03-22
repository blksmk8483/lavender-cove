import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Plants from './components/Plant/Plant';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <div className='app'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/plant' element={<Plants />} />

                </Routes>
                <Footer />
            </Router>
        </div>
    )
};

export default App;