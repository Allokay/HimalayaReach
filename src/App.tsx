import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import SocialWall from './components/SocialWall';
import About from './components/About';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';

function App() {
  const [isIdeaModalOpen, setIsIdeaModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
        <Hero
      />
      <About />
      <Services />
      <SocialWall />
      <Quotes />
      <Footer />

      

     
    </div>
  );
}

export default App;
