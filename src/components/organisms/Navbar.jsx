import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import '/src/styles/Navbar.css';


function NavigationBar() {
  return (
    <BootstrapNavbar className="navbar-custom" expand="lg">
      <Container>
        <div className="logo-container">
          <img src="/src/assets/file.svg" alt="¿Qué le doy?" className="logo-img" />
        </div>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/contactos">Contactos</Nav.Link>
            <Nav.Link href="/registrarse">Registrarse</Nav.Link>
            <Nav.Link href="/inicio-sesion" className="login-button">
              Iniciar Sesión
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default NavigationBar;