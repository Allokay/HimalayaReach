import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white py-32 border-t border-gray-800 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-32">
          
          <div className="md:col-span-3">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Himalaya Reach.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
              A premier strategy firm specializing exclusively in political strategy and campaign management.
            </p>
            <a href="mailto:info@himalayareach.com" className="inline-block bg-accent text-white px-6 py-3 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-accent-dark transition-colors">
              Initiate Contact
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-serif text-xl font-bold mb-6 text-gray-200">Headquarters</h3>
            <div className="space-y-4 text-gray-400 font-light text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gold" strokeWidth={1.5} />
                <span>
                  Koteshwor, Kathmandu,<br />
                  Bagmati Province, Nepal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-gold" strokeWidth={1.5} />
                <a href="mailto:info@himalayareach.com" className="hover:text-white transition-colors">
                  info@himalayareach.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-gold" strokeWidth={1.5} />
                <span>+977 9761444489</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-serif text-xl font-bold mb-6 text-gray-200">Contact Us</h3>
            <form action="https://formspree.io/f/xbjnzzpo" method="POST" className="space-y-3">
              <input type="text" name="name" placeholder="Full Name" required className="w-full bg-transparent border-b border-gray-700 px-0 py-1.5 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm font-light" />
              <input type="email" name="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-gray-700 px-0 py-1.5 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm font-light" />
              <textarea name="message" placeholder="Message / Inquiry" required rows={2} className="w-full bg-transparent border-b border-gray-700 px-0 py-1.5 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm font-light resize-none"></textarea>
              <button type="submit" className="w-full bg-white text-ink hover:bg-gray-200 px-4 py-2.5 uppercase tracking-widest text-[10px] font-medium transition-colors mt-2">
                Secure Submission
              </button>
            </form>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-serif text-xl font-bold mb-6 text-gray-200">Leadership</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gold text-[10px] uppercase tracking-[0.2em] mb-1">Founder</p>
                <div className="flex items-center justify-between">
                  <p className="text-white font-serif text-base">Sachin G Tandukar</p>
                  <div className="flex gap-2">
                    <a href="tel:+9779843802580" className="text-gray-400 hover:text-gold transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://wa.me/9779843802580" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gold text-[10px] uppercase tracking-[0.2em] mb-1">Chief Strategist</p>
                <div className="flex items-center justify-between">
                  <p className="text-white font-serif text-base">Suman Raj Paudel</p>
                  <div className="flex gap-2">
                    <a href="tel:+9779806762336" className="text-gray-400 hover:text-gold transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://wa.me/9779806762336" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                      <MessageCircle className="w-3.5 h-3.5" />
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
