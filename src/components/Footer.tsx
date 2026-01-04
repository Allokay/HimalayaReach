import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Facebook, Twitter, MessageCircle, Mountain } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer id="contact" className="bg-[#2C3E50] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Mountain className="w-8 h-8" />
                <span className="font-serif text-2xl font-bold">Himalaya Reach</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                A boutique strategy firm specializing in business growth consulting and
                political strategy in Nepal.
              </p>
        <div className="mt-4">
  <p className="text-gray-300 text-base">
    <span className="text-white font-semibold text-lg">Founder:</span> Sachin G Tandukar 
  </p>
  <p className="text-gray-300 text-base">
    <span className="text-white font-semibold text-lg">Chief Strategist:</span> Suman Raj poudel 
  </p>
</div>    
            </div>

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

            <div>
              <h3 className="font-serif text-xl font-bold mb-6">Follow Us</h3>
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

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Himalaya Reach Consultant. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
