import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Share2, Flag, Users, BarChart3, Activity, Crown } from 'lucide-react';
import Modal from './Modal';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'business' | 'political'>('business');
  type FullDescription =
  | string
  | {
      paragraph: string;
      points: string[];
    };
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const businessServices = [
    {
      icon: Target,
      title: 'Market Entry Strategy',
      shortDesc: 'Navigate Nepal\'s unique market landscape with precision.',
      fullDesc: 'Our market entry strategy combines deep local knowledge with international best practices. We conduct comprehensive market research, competitor analysis, regulatory assessments, and develop tailored go-to-market strategies that account for Nepal\'s unique business environment, cultural nuances, and infrastructure challenges.',
    },
    {
      icon: BarChart3,
      title: 'Data Strategy',
      shortDesc: 'Transform data into actionable business intelligence.',
      fullDesc: 'We help businesses build robust data infrastructure and analytics capabilities. From data collection and storage to advanced analytics and visualization, we empower decision-makers with real-time insights. Our approach includes customer segmentation, predictive modeling, and performance tracking aligned with your business objectives.',
    },
    {
      icon: Share2,
      title: 'Social Media Campaigns',
      shortDesc: 'Craft compelling narratives that resonate with your audience.',
      fullDesc: 'Our social media campaigns go beyond basic posting. We develop comprehensive content strategies, manage multi-platform presence, create engaging visual and written content, track performance metrics, and continuously optimize for maximum reach and engagement. We understand the Nepali digital landscape and craft messages that drive real business results.',
    },
    {
      icon: Share2,
      title: 'Social Media Campaigns',
      shortDesc: 'Craft compelling narratives that resonate with your audience.',
      fullDesc: 'Our social media campaigns go beyond basic posting. We develop comprehensive content strategies, manage multi-platform presence, create engaging visual and written content, track performance metrics, and continuously optimize for maximum reach and engagement. We understand the Nepali digital landscape and craft messages that drive real business results.',
    },
    {
      icon: Share2,
      title: 'Social Media Campaigns',
      shortDesc: 'Craft compelling narratives that resonate with your audience.',
      fullDesc: 'Our social media campaigns go beyond basic posting. We develop comprehensive content strategies, manage multi-platform presence, create engaging visual and written content, track performance metrics, and continuously optimize for maximum reach and engagement. We understand the Nepali digital landscape and craft messages that drive real business results.',
    },
  ];

  const politicalServices = [
    {
      icon: Flag,
      title: 'Campaign Management',
      shortDesc: 'End-to-end political campaign orchestration.',
      fullDesc: 'We provide comprehensive campaign management from strategy development to execution. This includes messaging framework, volunteer coordination, event planning, media relations, crisis management, and ground operations. Our team has deep understanding of Nepal\'s political landscape and voter behavior patterns.',
    },
    {
      icon: Users,
      title: 'Constituency Profiling',
      shortDesc: 'Deep demographic and psychographic analysis.',
      fullDesc: 'Our constituency profiling combines traditional research with modern data analytics. We map voter demographics, identify key influencers, analyze voting patterns, assess community needs, and identify opportunities for engagement. This intelligence forms the foundation of winning campaign strategies.',
    },
    {
      icon: Activity,
      title: 'Digital Perception Audit',
      shortDesc: 'Comprehensive analysis of your online presence and reputation.',
      fullDesc: 'We conduct thorough audits of digital perception across all platforms. This includes social media analysis, news coverage tracking, sentiment monitoring, competitor benchmarking, and identification of reputation risks and opportunities. We provide actionable recommendations to strengthen your digital presence.',
    },
    {
      icon: BarChart3,
      title: 'Sentiment Analysis',
      shortDesc: 'Real-time tracking of public opinion and perception.',
      fullDesc:  {
        paragraph:
      'Using advanced analytics and ground intelligence, we track public sentiment in real-time across digital and on-ground channels. This enables leaders to understand public mood, anticipate shifts, and respond proactively.',
    points: [
      'Social media sentiment tracking (Twitter, Facebook, YouTube)',
      'News and media perception analysis',
      'Grassroots feedback and survey insights',
      'Trending topic and narrative detection',
      'Approval ratings and public trust monitoring',
      'Early warning signals for emerging political or social risks',
    ],
      },
  },
     {
      icon: Flag,
      title: 'Campaign Management',
      shortDesc: 'End-to-end political campaign orchestration.',
      fullDesc: 'We provide comprehensive campaign management from strategy development to execution. This includes messaging framework, volunteer coordination, event planning, media relations, crisis management, and ground operations. Our team has deep understanding of Nepal\'s political landscape and voter behavior patterns.',
    },
     {
      icon: Flag,
      title: 'Campaign Management',
      shortDesc: 'End-to-end political campaign orchestration.',
      fullDesc: 'We provide comprehensive campaign management from strategy development to execution. This includes messaging framework, volunteer coordination, event planning, media relations, crisis management, and ground operations. Our team has deep understanding of Nepal\'s political landscape and voter behavior patterns.',
    },
  ];

  const strategicDominance = [
    {
      icon: Crown,
      title: 'The Art of the Win',
      description: 'Politics is chess, not checkers. We think seven moves ahead, anticipating counter-strategies and positioning our clients for inevitable victory. Our approach combines classical political wisdom with modern data science.',
    },
    {
      icon: Target,
      title: 'Strategic Dominance',
      description: 'In politics, perception is reality. We craft narratives that dominate the discourse, control the conversation, and position our clients as the only viable choice. Every message, every appearance, every decision is calculated for maximum impact.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dual expertise in business growth and political strategy
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab('business')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-[#2C3E50] text-white'
                  : 'text-[#2C3E50] hover:bg-gray-100'
              }`}
            >
              Business Consulting
            </button>
            <button
              onClick={() => setActiveTab('political')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'political'
                  ? 'bg-[#2C3E50] text-white'
                  : 'text-[#2C3E50] hover:bg-gray-100'
              }`}
            >
              Political Strategy
            </button>
          </div>
        </div>

        {activeTab === 'business' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {businessServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() =>
                    setSelectedService({
                      title: service.title,
                      description: service.fullDesc,
                    })
                  }
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
                >
                  <div className="bg-[#2C3E50] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C0392B] transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C3E50] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.shortDesc}</p>
                  <div className="mt-4 text-[#C0392B] font-medium group-hover:translate-x-2 transition-transform inline-block">
                    Learn more →
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === 'political' && (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"

            >
              {politicalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    onClick={() =>
                      setSelectedService({
                        title: service.title,
                        description: service.fullDesc,
                      })
                    }
                    className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
                  >
                    <div className="bg-[#2C3E50] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C0392B] transition-colors">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#2C3E50] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {service.shortDesc}
                    </p>
                    <div className="text-[#C0392B] font-medium text-sm group-hover:translate-x-2 transition-transform inline-block">
                      Explore →
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-xl p-12 text-white"
            >
              <h3 className="font-serif text-3xl font-bold mb-8 text-center">
                Strategic Dominance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {strategicDominance.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      onClick={() =>
                        setSelectedService({
                          title: item.title,
                          description: item.description,
                        })
                      }
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-10 h-10 mb-4" />
                      <h4 className="font-serif text-xl font-bold mb-3">{item.title}</h4>
                      <p className="text-gray-200 leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </div>

      <Modal
  isOpen={selectedService !== null}
  onClose={() => setSelectedService(null)}
  title={selectedService?.title}
>
  <div className="max-w-none">
    {typeof selectedService?.description === 'string' && (
      <p className="text-gray-700 leading-relaxed text-lg">
        {selectedService.description}
      </p>
    )}

    {typeof selectedService?.description === 'object' && (
      <>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          {selectedService.description.paragraph}
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {selectedService.description.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </>
    )}
  </div>
</Modal>

    </section>
  );
}
