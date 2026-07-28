import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Globe, Shield, Phone, MessageCircle } from 'lucide-react';
import Modal from './Modal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Data-backed demographic mapping and voter psychographics.',
      number: '01'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International campaign best practices adapted for local constituencies.',
      number: '02'
    },
    {
      icon: Shield,
      title: 'Narrative Defense',
      description: 'Proactive crisis management and counter-misinformation operations.',
      number: '03'
    },
  ];

  const expandedContent = `
    Himalaya Reach is founded on the belief that Nepal deserves world-class strategic advisory services for its political leaders and campaigns. We are a strategy house built by Nepalis, for Nepali interests, designed to bring rigor and precision to the electoral process.

    Our Approach:

    We combine rigorous analytical frameworks with deep cultural intelligence. Our team has lived the challenges our political leaders face. We understand the regulatory complexities, the alliance dynamics, and the unwritten rules that govern success in Nepali elections. This insider knowledge, combined with data-science and international campaign experience, creates a unique advantage.

    For Political Clients:

    Politics in Nepal is complex, multi-layered, and constantly evolving. We provide the strategic infrastructure that modern campaigns require: data-driven voter insights, message development, digital strategy, and ground operations coordination. Our political work is guided by a commitment to democratic values, ethical campaign practices, and absolute discretion.

    Our Philosophy:

    Strategy is not about creating elaborate presentations. It's about making better decisions, faster. It's about seeing opportunities others miss, neutralizing attacks before they land, and positioning for inevitable victory. 

    We believe in:
    • Data over hunches
    • Execution over theory
    • Long-term alliances over transactional engagements
    • Elevating Nepali democratic discourse
    • Discretion and confidentiality above all else

    Why Choose Us:

    We deliberately remain small and selective. This allows us to maintain quality, protect client confidentiality, and avoid conflicts of interest. Every campaign gets senior-level attention. We take on leaders we believe in and where we can genuinely secure a mandate.
  `;

  return (
    <section id="about" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4 select-none opacity-5 pointer-events-none">
        <span className="font-serif text-[40rem] font-bold text-ink leading-none">I</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col"
          >
            <div className="text-gold font-medium uppercase tracking-[0.2em] text-xs mb-6">Our Core Mandate</div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-ink mb-8 leading-tight tracking-tight">
              A Premier <br/> Strategy House.
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
              Himalaya Reach operates at the intersection of data science and 
              political intelligence.
            </p>

            <p className="text-lg text-gray-500 leading-relaxed mb-12">
              Based in Kathmandu, we serve as discreet strategic advisors to
              political leaders, parties, and campaigns navigating Nepal's complex electoral landscape. We are not generalists. Our focus is singular: providing the strategic clarity, operational frameworks, and narrative dominance that separate winners from participants.
            </p>

            {/* Political Revolution Image Integration */}
            <div className="mb-12 relative grayscale hover:grayscale-0 transition-all duration-700 border border-gray-200">
              <img 
                src="/nepal_political_revolution.jpg" 
                alt="Political revolution and democratic process in Nepal" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent border border-ink text-ink hover:bg-ink hover:text-white px-8 py-4 rounded-none font-medium tracking-widest uppercase text-sm transition-all duration-300 flex items-center justify-center space-x-3 cursor-hover self-start"
            >
              <span>Our Full Philosophy</span>
              <BookOpen className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7 pt-12 lg:pt-32 flex flex-col gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isOffset = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.15 }}
                  className={`relative bg-white p-10 md:p-14 shadow-sm border border-gray-100 ${isOffset ? 'lg:ml-24' : 'lg:mr-24'}`}
                >
                  <div className="absolute top-4 right-6 font-serif text-7xl text-gray-100 font-bold select-none z-0">
                    {value.number}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-8">
                      <Icon className="w-full h-full text-ink" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-ink mb-4 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed font-light">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-32 pt-24 border-t border-gray-200">
          <div className="text-gold font-medium uppercase tracking-[0.2em] text-xs mb-12">Team</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Team Member 1 */}
            <div className="group relative overflow-hidden bg-white border border-gray-100 rounded-lg">
              <div className="aspect-[4/5] bg-gray-200 relative">
                {/* Placeholder Image Space */}
                <div className="absolute inset-0 bg-gray-300 mix-blend-multiply flex items-center justify-center text-gray-500 font-light text-sm tracking-widest uppercase">
                  Image Pending
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-ink p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl font-bold text-white mb-1">Sachin G Tandukar</h3>
                <p className="text-gray-300 text-sm font-medium">Founder</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group relative overflow-hidden bg-white border border-gray-100 rounded-lg">
              <div className="aspect-[4/5] bg-gray-200 relative">
                {/* Placeholder Image Space */}
                <div className="absolute inset-0 bg-gray-300 mix-blend-multiply flex items-center justify-center text-gray-500 font-light text-sm tracking-widest uppercase">
                  Image Pending
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-ink p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl font-bold text-white mb-1">Suman Raj Paudel</h3>
                <p className="text-gray-300 text-sm font-medium">Chief Strategist</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Philosophy & Approach"
      >
        <div className="prose prose-lg max-w-none prose-headings:font-serif">
          {expandedContent.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 font-light">
              {paragraph}
            </p>
          ))}
        </div>
      </Modal>
    </section>
  );
}
