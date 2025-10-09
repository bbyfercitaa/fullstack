import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros'
import Contactos from './pages/Contactos'
import Registrarse from './pages/Registrarse'
import IniciarSesion from './pages/IniciarSesion'


function App() {
 return (
   <>
     <NavigationBar />
     <div className="divider-line"></div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/nosotros" element={< Nosotros/>} />
       <Route path="/contactos" element={< Contactos/>} />
       <Route path="/registrarse" element={< Registrarse/>} />
       <Route path="/iniciarsesion" element={< IniciarSesion/>} />
     </Routes>
     <Footer />
   </>
 );
}


export default App;
