import './App.css';
import Header from './Header';
import Home from './Home';
import Feature from './Feature/Feature';
import Pricing from './Pricing/Pricing';
import About from './About/About';
import Contact from './Contact';
import Footer from './Footer';
import Feature2 from './Feature/Feature2';
import Feature3 from './Feature/Feature3';
import Pricing2 from './Pricing/Pricing2';
import Pricing3 from './Pricing/Pricing3';
import About2 from './About/About2';

import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      offset: 200,    // Offset (in pixels) from the top of the document
    });
  }, []);
  return (
    <>
     <Header />
     <Home />
     <Feature />
    <Feature2/>
    <Feature3/>
     <Pricing />
     <Pricing2/>
     <Pricing3/>
     <About />
     <About2/>
     <Contact />
     <Footer />
    </>
  );
}

export default App;
