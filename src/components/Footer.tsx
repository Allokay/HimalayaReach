import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Facebook, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer id="contact" className="bg-[#2C3E50] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Left: Company + Follow Us */}
            <div className="space-y-6">
              {/* Company Logo + Name */}
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="Himalaya Reach Logo" className="w-13 h-auto" />
                <span className="font-serif text-2xl font-bold">Himalaya Reach</span>
              </div>
              {/* Company Description */}
              <p className="text-gray-300 leading-relaxed">
                A boutique strategy firm specializing in business growth consulting and political strategy.
              </p>

              {/* Follow Us Section moved here */}
              <div className="space-y-2 mt-8">
                <h3 className="font-serif text-xl font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-lg hover:bg-[#C0392B] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-lg hover:bg-[#C0392B] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-lg hover:bg-[#C0392B] transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Middle: Contact Info */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#C0392B]" />
                  <span className="text-gray-300">
                    Koteshwor, Kathmandu,<br />
                    Nepal
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#C0392B]" />
                  <a
                    href="mailto:contact@himalayareach.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@himalayanreach.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#C0392B]" />
                  <span className="text-gray-300">+977 9761444489</span>
                </div>
              </div>
            </div>

            {/* Right: Founder & Chief Strategist */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold mb-6">Our Leadership</h3>

              {/* Founder */}
              <div className="bg-white/10 p-4 rounded-lg border border-white/20 hover:border-[#C0392B] transition-all">
                <p className="text-gray-300 text-sm">Founder</p>
                <p className="text-white font-serif font-bold text-lg mt-1">Sachin G Tandukar</p>
                <p className="text-gray-400 text-xs mt-1 italic">Visionary & Strategic Leader</p>
              </div>

              {/* Chief Strategist */}
              <div className="bg-white/10 p-4 rounded-lg border border-white/20 hover:border-[#C0392B] transition-all">
                <p className="text-gray-300 text-sm">Chief Strategist</p>
                <p className="text-white font-serif font-bold text-lg mt-1">Suman Raj Poudel</p>
                <p className="text-gray-400 text-xs mt-1 italic">Expert in Business & Political Strategy</p>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Himalaya Reach Consultant. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <motion.a
        href="https://wa.me/9779806762336"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#2C3E50] text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </motion.a>
    </>
  );
}
