import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

function Navbar() {
   const [expandNavbar, setExpandNavbar] = useState(false);

   const location = useLocation();

   useEffect(() => {
      setExpandNavbar(false)
   }, [location]);

   return (
      <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
         <div className="toggleButton">
            <button onClick={() => { setExpandNavbar((e) => !e) }} > <FormatAlignJustifyIcon />  </button>
         </div>
         <div className="links">
            <Link to='/'> Home </Link>
            <Link to='about'> About </Link>
            <Link to='products'> Products </Link>
            <Link to='Cart'> Cart </Link>
            <Link to='Plant'> Plant </Link>
         </div>
      </div>
   );
}

export default Navbar;