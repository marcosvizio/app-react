import React from 'react'
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { NavDropdown } from "react-bootstrap"

export const Navbar = () => {
  return (
    <header className="header">
          <div>
            <h2><Link to='/' className="header__logo">MAX COMPUTER</Link></h2>
          </div>
          <div className="header__items">
            <ul className="header__items--ul">
              <li><Link to='/' className="header__items--ulLink">Inicio</Link></li>
              <NavDropdown title="Productos" className="header__items--ulLink" id="collasible-nav-dropdown">
                <li><Link to='/products' className="dropdown-item">Todos los Productos</Link></li>
                <li><Link to='/category/pcs' className="dropdown-item">PC's armadas</Link></li>
                <li><Link to='/category/perifericos' className="dropdown-item">Elementos de PC</Link></li>
                <li><Link to='/category/notebooks' className="dropdown-item">Notebooks</Link></li>
              </NavDropdown>
            </ul>
            <CartWidget />
          </div>
      </header>
  )
}