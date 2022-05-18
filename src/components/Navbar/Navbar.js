import { CartWidget } from "../CartWidget/CartWidget"

export default function Navbar() {
    return (
      <header className="header">
          <div>
            <h2><a href="#" className="header__logo">RISK STORE</a></h2>
          </div>
          <div className="header__items">
            <ul className="header__items--ul">
              <li><a href="#" className="header__items--ulLink">Inicio</a></li>
              <li><a href="#" className="header__items--ulLink">Productos</a></li>
              <li><a href="#" className="header__items--ulLink">Nosotros</a></li>
            </ul>
            <CartWidget count="1"/>
          </div>
      </header>
    )
}