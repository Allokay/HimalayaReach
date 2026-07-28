import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Users, BarChart3, Activity, Crown, ShieldAlert, Cpu, Share2 } from 'lucide-react';
import Modal from './Modal';

type FullDescription =
  | string
  | {
      paragraph: string;
      points: string[];
    };

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: FullDescription;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: FullDescription;
  } | null>(null);

  const serviceClusters = [
    {
      title: "Campaign Strategy & Operations",
      services: [
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
          icon: Share2,
          title: 'Influencer Campaigning',
          shortDesc: 'Leveraging trusted voices to shape public opinion.',
          fullDesc: 'We identify and activate influential digital creators, community leaders, and opinion shapers aligned with your campaign goals. Our influencer strategies ensure authentic messaging, increased reach, and stronger emotional connection with target voter segments.',
        },
      ]
    },
    {
      title: "Intelligence & Analytics",
      services: [
        {
          icon: Activity,
          title: 'Sentiment Analysis',
          shortDesc: 'Real-time tracking of public opinion and perception.',
          fullDesc: {
            paragraph: 'Using advanced analytics and ground intelligence, we track public sentiment in real-time across digital and on-ground channels. This enables leaders to understand public mood, anticipate shifts, and respond proactively.',
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
          icon: Target,
          title: 'Opponents Research & Analysis',
          shortDesc: 'Comprehensive intelligence on political rivals.',
          fullDesc: 'We conduct deep research into opponents’ campaign strategies, messaging, voter base, funding patterns, alliances, and historical performance. This enables precise counter-strategies, early risk identification, and informed decision-making throughout the campaign lifecycle.',
        },
        {
          icon: BarChart3,
          title: 'Instant Polling Services',
          shortDesc: 'Real-time voter sentiment for agile decision-making.',
          fullDesc: 'We deliver fast, reliable polling insights through digital surveys, telephonic outreach, and targeted sampling. These instant feedback loops help refine messaging, adjust strategies, and respond quickly to shifting public opinion.',
        },
        {
          icon: Cpu,
          title: 'Election Outcome Forecast',
          shortDesc: 'Data-driven prediction of electoral results.',
          fullDesc: 'Using advanced analytics, historical data, voter demographics, polling trends, and ground intelligence, we forecast election outcomes with high accuracy. Scenario-based forecasting helps campaigns prepare for multiple electoral possibilities.',
        },
        {
          icon: Target,
          title: 'Geographical Voter Pattern Analysis',
          shortDesc: 'Mapping voter behavior across regions.',
          fullDesc: 'Our constituency-wise and booth-level analysis identifies strongholds, swing zones, and weak areas. This geographical intelligence enables targeted campaigning, efficient resource allocation, and localized messaging strategies.',
        }
      ]
    },
    {
      title: "Digital & Narrative Defense",
      services: [
        {
          icon: Activity,
          title: 'Digital Perception Audit',
          shortDesc: 'Analysis of your online presence and reputation.',
          fullDesc: 'We conduct thorough audits of digital perception across all platforms. This includes social media analysis, news coverage tracking, sentiment monitoring, competitor benchmarking, and identification of reputation risks and opportunities.',
        },
        {
          icon: ShieldAlert,
          title: 'Cyber Warrior Unit',
          shortDesc: 'Defending the digital political space.',
          fullDesc: 'Our cyber team monitors online platforms 24/7 to counter misinformation, fake news, coordinated attacks, and hostile narratives. Through rapid response, narrative correction, and strategic engagement, we safeguard and strengthen your digital reputation.',
        },
        {
          icon: Activity,
          title: 'Campaign Impact Analysis',
          shortDesc: 'Measuring what works—and what doesn’t.',
          fullDesc: 'We analyze the impact of rallies, advertisements, social media activity, speeches, and grassroots outreach. By tracking engagement, sentiment shifts, and voter response, we help optimize campaign efforts for maximum effectiveness.',
        },
        {
          icon: Activity,
          title: 'Post-Campaign Impact Assessment',
          shortDesc: 'Turning campaign data into future-winning insights.',
          fullDesc: 'After elections, we conduct a detailed evaluation of campaign strategies, messaging effectiveness, digital performance, and voter outreach. The insights gained form a strong strategic foundation for future political planning and leadership positioning.',
        }
      ]
    }
  ];

  const strategicDominance = [
    {
      icon: Crown,
      title: 'Our Proven Expertise',
      description: 'We don\'t just theorize; we execute. Our team combines deep on-the-ground political experience with advanced data analytics. We know what it takes to win in Nepal\'s complex electoral landscape because we have been there.',
    },
    {
      icon: Target,
      title: 'Unmatched Precision',
      description: 'Every decision we make is backed by data. From constituency profiling to narrative defense, our strategies are meticulously crafted to resonate with your target demographic and neutralize opponent advantages.',
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
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-24 md:w-2/3"
        >
          <div className="text-gold font-medium uppercase tracking-[0.2em] text-xs mb-4">Capabilities</div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-ink leading-tight tracking-tight">
            Political Strategy <br className="hidden md:block"/> & Services.
          </h2>
        </motion.div>

        {serviceClusters.map((cluster, clusterIndex) => (
          <div key={clusterIndex} className="mb-32">
            <div className="flex items-end mb-12 border-b border-gray-100 pb-6">
              <span className="font-serif text-6xl text-gray-200 font-bold mr-6">0{clusterIndex + 1}</span>
              <h3 className="text-3xl font-serif font-bold text-ink tracking-tight mb-2">
                {cluster.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {cluster.services.map((service, index) => {
                const Icon = service.icon;
                
                // Create an asymmetrical layout based on index
                let colSpan = "md:col-span-4";
                if (index === 0) colSpan = "md:col-span-8";
                else if (index === 1 && cluster.services.length === 3) colSpan = "md:col-span-4";
                else if (index === 2 && cluster.services.length === 3) colSpan = "md:col-span-12";
                else if (index % 3 === 0) colSpan = "md:col-span-7";
                else if (index % 3 === 1) colSpan = "md:col-span-5";
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                    onClick={() =>
                      setSelectedService({
                        title: service.title,
                        description: service.fullDesc,
                      })
                    }
                    className={`${colSpan} group cursor-pointer bg-gray-50 p-10 lg:p-14 border border-gray-100 hover:border-accent hover:bg-white transition-all duration-500`}
                  >
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-12 h-12">
                        <Icon className="w-full h-full text-ink group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                      <span className="font-serif text-3xl text-gray-200 font-bold group-hover:text-gold transition-colors duration-500 opacity-50">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="font-serif text-3xl font-bold text-ink mb-4 tracking-tight group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-gray-500 text-lg leading-relaxed font-light mb-8">
                      {service.shortDesc}
                    </p>
                    <div className="text-accent font-medium text-sm tracking-widest uppercase inline-flex items-center">
                      Explore Details <span className="ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">→</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-ink p-12 md:p-20 text-white relative overflow-hidden"
        >
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-gold font-medium uppercase tracking-[0.2em] text-xs mb-6 text-center">The Himalaya Reach Difference</div>
            <h3 className="font-serif text-4xl md:text-6xl font-bold mb-16 text-center tracking-tight leading-tight">
              Why Choose Us.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {strategicDominance.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index}>
                    <div className="w-16 h-16 border border-white/20 rounded-none flex items-center justify-center mb-8">
                      <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-serif text-3xl font-bold mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-lg font-light">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
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
