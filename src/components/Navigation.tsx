import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <div className={`p-1.5 transition-colors ${(isScrolled || location.pathname !== '/') ? 'bg-ink' : 'bg-white/20'}`}>
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <span
              className={`font-serif text-xl font-bold transition-colors ${
                (isScrolled || location.pathname !== '/') ? 'text-ink' : 'text-white'
              }`}
            >
              Himalaya Reach
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent ${
                  location.pathname === link.path 
                    ? 'text-accent' 
                    : (isScrolled || location.pathname !== '/') ? 'text-ink' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent ${
                location.pathname === '/contact' 
                  ? 'text-accent' 
                  : (isScrolled || location.pathname !== '/') ? 'text-ink' : 'text-white'
              }`}
            >
              Contact
            </Link>
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
                  (isScrolled || location.pathname !== '/') ? 'bg-ink' : 'bg-white'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  (isScrolled || location.pathname !== '/') ? 'bg-ink' : 'bg-white'
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  (isScrolled || location.pathname !== '/') ? 'bg-ink' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className={`block w-full text-left py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-accent' : isScrolled ? 'text-ink' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => {
              document.getElementById('mobile-menu')?.classList.add('hidden');
            }}
            className={`block w-full text-left py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent ${
              location.pathname === '/contact' ? 'text-accent' : isScrolled ? 'text-ink' : 'text-white'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
