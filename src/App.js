
import './App.css';

import Navbar from './Common/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Booking from './Pages/Booking';
import Gallery from './Pages/Gallery';
function App() {
  return (
    <div>
      <Navbar />
      <Routes  >
        <Route path='/' element ={<Home />} />
        <Route path='/Services' element ={<Services />} />
        <Route path='/About' element ={<About />} />
        <Route path='/Contact' element ={<Contact />} />
        <Route path='/Booking' element ={<Booking />} />
        <Route path='/Gallery' element ={<Gallery />} />
      </Routes>
     {/* <Bottom /> */}
    </div>
  );
}

export default App;
