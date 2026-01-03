import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Quotes() {
  const quotes = [
    {
      text: 'Strategy is the art of making the invisible, visible.',
      author: 'Sun Tzu',
    },
    {
      text: 'In the middle of difficulty lies opportunity.',
      author: 'Albert Einstein',
    },
    {
      text: 'The supreme art of war is to subdue the enemy without fighting.',
      author: 'Sun Tzu',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#2C3E50] to-[#34495E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full">
                <Quote className="w-12 h-12 text-[#C0392B] mb-6" />
                <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-6">
                  "{quote.text}"
                </blockquote>
                <cite className="text-gray-300 not-italic font-medium">
                  — {quote.author}
                </cite>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
