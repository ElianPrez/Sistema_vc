import React, { useState, } from 'react';
import { Link } from "react-router-dom";
//import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';


function NavbarC() {
  return (
    <nav className="bg-gray-100 text-gray border-b border-gray-300 p-4 flex items-center justify-end">
      {/* Logo */}
      <div className="flex items-center space-x-4">
       <span className="text-2x  px-4">Su Solución en Sistemas de Gestion.</span>
      </div>

      {/* Login Button */}
      <div>
        <a href="/Salir">
          <button className="bg-red-500 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            Salir
          </button>
        </a>
      </div>
    </nav>
  );
}

export default NavbarC;
