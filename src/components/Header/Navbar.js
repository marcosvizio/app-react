export default function Navbar() {
    return (
      <header className="header">
          <div>
            <h2><a href="#" className="header__logo">RISK STORE</a></h2>
          </div>
          <ul className="header__ul">
              <li><a href="#" className="header__ul--li">Inicio</a></li>
              <li><a href="#" className="header__ul--li">Productos</a></li>
              <li><a href="#" className="header__ul--li">Nosotros</a></li>
          </ul> 
      </header>
    )
}