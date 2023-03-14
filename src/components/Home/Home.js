import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to='about'>About</Link>
            <Link to='products'>Products</Link>
            <Link to='Cart'>Cart</Link>
            <Link to='Plant'>Plant</Link>
        </div>
    )
};

export default Home;