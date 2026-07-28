import { motion } from 'framer-motion';

export default function Quotes() {
  const quote = {
      text: 'Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.',
      author: 'Sun Tzu',
  };

  return (
    <section className="py-32 md:py-48 bg-ink relative overflow-hidden flex items-center justify-center min-h-[70vh]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30rem] text-white/5 font-serif font-bold select-none pointer-events-none leading-none">
        "
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <blockquote className="font-serif text-4xl md:text-6xl text-white leading-tight mb-12 tracking-tight">
            {quote.text}
          </blockquote>
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-[1px] bg-gold"></div>
            <cite className="text-gold tracking-[0.3em] uppercase text-sm font-medium not-italic">
              {quote.author}
            </cite>
            <div className="w-12 h-[1px] bg-gold"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
