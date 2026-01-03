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
    
      <About />
      <Services />
      <SocialWall />
      <Quotes />
      <Footer />

      <Modal
        isOpen={isIdeaModalOpen}
        onClose={() => setIsIdeaModalOpen(false)}
        title="Submit Your Idea"
      >
        <IdeaForm type="idea" />
      </Modal>

      <Modal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        title="Partner With Us"
      >
        <IdeaForm type="partner" />
      </Modal>
    </div>
  );
}

export default App;
