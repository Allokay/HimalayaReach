import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Globe, Lightbulb } from 'lucide-react';
import Modal from './Modal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: 'Regional Intelligence',
      description: 'Deep understanding of South Asian political and business landscapes',
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International best practices adapted for local contexts',
    },
    {
      icon: Lightbulb,
      title: 'Strategic Innovation',
      description: 'Creative solutions to complex challenges',
    },
  ];

  const expandedContent = `
    Himalayan Reach Consultant was founded on the belief that Nepal deserves world-class strategic advisory services that understand and respect its unique context. We are not a large multinational firm trying to apply cookie-cutter solutions to Nepali challenges. We are a boutique strategy house built by Nepalis, for Nepali interests.

    Our Approach:

    We combine rigorous analytical frameworks with deep cultural intelligence. Our team has lived the challenges our clients face. We understand the regulatory complexities, the relationship dynamics, the unwritten rules that govern success in Nepal. This insider knowledge, combined with international training and experience, creates a unique advantage.

    For Business Clients:

    We help entrepreneurs and established businesses navigate Nepal's evolving market landscape. From market entry strategy for international companies to growth strategy for Nepali enterprises, we provide the intelligence and strategic frameworks needed to succeed. We don't just analyze—we partner with our clients to implement winning strategies.

    For Political Clients:

    Politics in Nepal is complex, multi-layered, and constantly evolving. We provide the strategic infrastructure that modern campaigns require: data-driven voter insights, message development, digital strategy, and ground operations coordination. Our political work is guided by a commitment to democratic values and ethical campaign practices.

    Our Philosophy:

    Strategy is not about creating elaborate presentations that sit on shelves. It's about making better decisions, faster. It's about seeing opportunities others miss and avoiding pitfalls others don't anticipate. It's about execution, not just planning.

    We believe in:
    • Data over hunches
    • Execution over theory
    • Long-term relationships over transactional engagements
    • Elevating Nepali capabilities and interests
    • Ethical practices in both business and politics

    Regional Expertise:

    While headquartered in Kathmandu, our perspective encompasses the broader Himalayan and South Asian region. We track policy developments in Delhi, Beijing, and Washington that affect Nepal. We understand how regional dynamics impact local opportunities. This macro-perspective informs our micro-strategies.

    Why "Boutique":

    We deliberately remain small and selective. This allows us to maintain quality, protect client confidentiality, and avoid conflicts of interest. Every client gets senior-level attention, not junior consultants learning on the job. We take on projects we believe in and where we can genuinely add value.

    Our Commitment:

    To our business clients: We commit to understanding your business as deeply as you do, bringing fresh perspectives, and staying engaged until strategies become results.

    To our political clients: We commit to ethical campaign practices, data-driven strategies, and building democratic discourse while pursuing electoral success.

    To Nepal: We commit to building institutional knowledge, developing local talent, and elevating the standard of strategic advisory services available in the country.
  `;

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6 text-center">
            A Boutique Strategy House
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Himalayan Reach Consultant operates at the intersection of business acumen and
              political intelligence. Based in Kathmandu, we serve as strategic advisors to
              entrepreneurs, investors, and political leaders navigating Nepal's complex and
              dynamic landscape.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are not generalists. Our focus is singular: providing the strategic clarity
              and operational frameworks that separate winners from participants. Whether it's
              entering a new market, scaling a business, or winning an election, we bring
              data-backed insights and proven methodologies.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              What distinguishes us is our dual capability. Few firms can credibly advise on
              both business growth and political strategy. We can—because we understand that
              in Nepal, business success and political awareness are inseparable. Policy
              shifts, regulatory changes, and political developments directly impact business
              outcomes. Similarly, economic trends and business sentiment shape political
              fortunes.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C0392B] hover:bg-[#A93226] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5" />
              <span>Read Our Complete Philosophy</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg text-center"
                >
                  <div className="bg-[#2C3E50] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C3E50] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Philosophy & Approach"
      >
        <div className="prose max-w-none">
          {expandedContent.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </Modal>
    </section>
  );
}
