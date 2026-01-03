import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

interface HeroProps {
  onOpenIdeaForm: () => void;
  onOpenPartnerForm: () => void;
}

export default function Hero({ onOpenIdeaForm, onOpenPartnerForm }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/19678917/pexels-photo-19678917.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/90 via-[#2C3E50]/80 to-[#2C3E50]/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Strategizing the Future of Business and Governance in Nepal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
        >
          Data-backed growth for entrepreneurs and precision strategy for political leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onOpenIdeaForm}
            className="group bg-[#C0392B] hover:bg-[#A93226] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Submit Your Idea</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenPartnerForm}
            className="group bg-white hover:bg-gray-50 text-[#2C3E50] px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Users className="w-5 h-5" />
            <span>Partner With Us</span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
