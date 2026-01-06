
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import DesignProcess from './components/DesignProcess';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <DesignProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
