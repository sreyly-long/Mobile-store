import './App.css';
import Footer from './components/Footer';
import Navbars from './components/Navbar';
import Contact from './pages/ContactUs';
import Home from './pages/Home';
import LapTop from './pages/LapTop';
import SmartPhone from './pages/SmartPhone';
import SmartWatch from './pages/SmartWatch';
import Tablet from './pages/Tablet';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbars/>
      <main>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/smart_phone' Component={SmartPhone} />
          <Route exact path='/tablet' Component={Tablet} />
          <Route exact path='/laptop' Component={LapTop} />
          <Route exact path='/smart_watch' Component={SmartWatch} />
          <Route exact path='/contact_us' Component={Contact} />
        </Routes>
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
