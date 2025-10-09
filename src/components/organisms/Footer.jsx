import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-shape"></div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>¿Qué le doy?</h3>
          <p>
            Encuentra el regalo perfecto para tus seres queridos con nuestra 
            amplia selección de productos y ofertas especiales.
          </p>

        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/contactos">Contactos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="footer-links">
            <li>📍 Dirección: Calle Principal #123</li>
            <li>📞 Teléfono: (123) 456-7890</li>
            <li>✉️ Email: info@queledoy.com</li>
            <li>⏰ Horario: Lun-Vie: 9am - 6pm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ¿Qué le doy? Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;