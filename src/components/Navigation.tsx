import { useState, useEffect } from 'react';
import { Mountain } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <img
  src="/logo.png"
  alt="Himalayan Reach Logo"
  className="h-14 w-auto"
/>

            <span
              className={`font-serif text-lg font-bold transition-colors ${
                isScrolled ? 'text-[#2C3E50]' : 'text-white'
              }`}
            >
              Himalaya Reach
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#C0392B] ${
                  isScrolled ? 'text-[#2C3E50]' : 'text-white'
                }`}
              >
                {section === 'home' ? 'Home' : section === 'about' ? 'About Us' : section === 'services' ? 'Services' : 'Contact'}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.toggle('hidden');
              }
            }}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-[#2C3E50]' : 'bg-white'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-[#2C3E50]' : 'bg-white'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-[#2C3E50]' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
          {['home', 'about', 'services', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className={`block w-full text-left py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#C0392B] ${
                isScrolled ? 'text-[#2C3E50]' : 'text-white'
              }`}
            >
              {section === 'home' ? 'Home' : section === 'about' ? 'About Us' : section === 'services' ? 'Services' : 'Contact'}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
