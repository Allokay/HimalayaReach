import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titleLines = ["Strategizing the Future", "of Political Leadership", "in Nepal"];

  return (
    <section ref={containerRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-ink">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 opacity-40 mix-blend-luminosity grayscale"
        style={{
          y: backgroundY,
          backgroundImage: `url("/nepal_institutional_architecture.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/60 to-ink" />

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="mb-6 flex flex-col items-center">
          {titleLines.map((line, index) => (
            <div key={index} className="overflow-hidden py-1">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 * index }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <div className="overflow-hidden mb-12 flex justify-center">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl font-light tracking-wide"
          >
            Data-backed campaigning and precision strategy for the next generation of political leaders.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            to="/contact"
            className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-none font-medium tracking-widest uppercase text-sm transition-all duration-300 flex items-center justify-center gap-3 cursor-hover hover:scale-105"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            to="/about"
            className="w-full sm:w-auto bg-transparent border border-gray-600 hover:border-white hover:text-white text-gray-400 px-10 py-4 rounded-none font-medium tracking-widest uppercase text-sm transition-all duration-300 cursor-hover flex items-center justify-center"
          >
            Our Approach
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
