import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="categories">
        <h4 className="footer__title">Categorias</h4>
        <ul className="footer__ul">
          <li className="footer__li"><Link to='/products' className="footer__li--link">Todos los productos</Link></li>
          <li className="footer__li"><Link to='/category/pcs' className="footer__li--link">PC's armadas</Link></li>
          <li className="footer__li"><Link to='/category/notebooks' className="footer__li--link">Notebooks</Link></li>
          <li className="footer__li"><Link to='/category/perifericos' className="footer__li--link">Perifericos</Link></li>
        </ul>
      </div>
      <div className="maps">
        <h4 className="footer__title">Dirección</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26285.76181690254!2d-58.491253484374965!3d-34.5606384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb56cefcb9595%3A0x5b67fe9daafd4054!2sGaler%C3%ADa%20R%C3%ADo%20de%20La%20Plata!5e0!3m2!1ses-419!2sar!4v1656544756272!5m2!1ses-419!2sar" width="600" height="450" className="footer__maps" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact">
        <h4 className="footer__title">Contacto</h4>
        <ul>
          <li className="footer__li"><a href="https://web.whatsapp.com/"><img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-4-1.png" alt="Logo de WhatsApp"/></a></li>
          <li className="footer__li"><a href="https://www.instagram.com/"><img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-16.png" alt="Logo de Instagram"/></a></li>
          <li className="footer__li"><a href="https://www.facebook.com/"><img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-5-1.png" className="footer__logo" alt="Logo de Instagram"/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer