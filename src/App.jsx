import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';


function App() {
 return (
   <>
     <NavigationBar />
     <div className="divider-line"></div>
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
     <Footer />
   </>
 );
}


export default App;
