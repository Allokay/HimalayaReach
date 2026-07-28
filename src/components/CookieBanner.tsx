import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-ink border-t border-gray-800 text-white p-4 sm:p-6 z-50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
      <div className="text-sm text-gray-300 font-light tracking-wide max-w-4xl">
        We use essential cookies and similar technologies to ensure our website functions securely and effectively. By continuing to use this site, you consent to our privacy and cookie practices. 
      </div>
      <button 
        onClick={handleAccept}
        className="whitespace-nowrap bg-white text-ink px-6 py-2 rounded-none font-medium text-xs tracking-widest uppercase hover:bg-gray-100 transition-colors"
      >
        Acknowledge
      </button>
    </div>
  );
}
