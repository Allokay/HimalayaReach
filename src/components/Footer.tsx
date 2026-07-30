import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white py-32 border-t border-gray-800 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          
          <div className="md:col-span-5">
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Himalaya Reach.
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed font-light max-w-sm mb-12">
              A premier strategy firm specializing exclusively in political strategy and campaign management.
            </p>
            <div className="flex gap-4">
              <a href="mailto:info@himalayareach.com" className="bg-accent text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-accent-dark transition-colors">
                Initiate Contact
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-serif text-2xl font-bold mb-8 text-gray-200">Headquarters</h3>
            <div className="space-y-6 text-gray-400 font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-gold" strokeWidth={1.5} />
                <span>
                  Koteshwor, Kathmandu,<br />
                  Bagmati Province, Nepal
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 flex-shrink-0 text-gold" strokeWidth={1.5} />
                <a href="mailto:info@himalayareach.com" className="hover:text-white transition-colors">
                  info@himalayareach.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 flex-shrink-0 text-gold" strokeWidth={1.5} />
                <span>+977 9761444489</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-serif text-2xl font-bold mb-8 text-gray-200">Leadership</h3>
            <div className="space-y-8">
              <div>
                <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Founder</p>
                <div className="flex items-center justify-between">
                  <p className="text-white font-serif text-xl">Sachin G Tandukar</p>
                  <div className="flex gap-3">
                    <a href="tel:+9779843802580" className="text-gray-400 hover:text-gold transition-colors">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a href="https://wa.me/9779843802580" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">Chief Strategist</p>
                <div className="flex items-center justify-between">
                  <p className="text-white font-serif text-xl">Suman Raj Paudel</p>
                  <div className="flex gap-3">
                    <a href="tel:+9779806762336" className="text-gray-400 hover:text-gold transition-colors">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a href="https://wa.me/9779806762336" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-light text-sm uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Himalaya Reach. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500 font-light uppercase tracking-widest">
            <span className="cursor-pointer hover:text-white transition-colors">Confidentiality</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
