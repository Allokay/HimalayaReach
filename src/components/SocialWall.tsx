import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, ExternalLink } from 'lucide-react';
import Modal from './Modal';

export default function SocialWall() {
  const [selectedPost, setSelectedPost] = useState<{
    platform: string;
    title: string;
    strategy: string;
    positioning: string;
  } | null>(null);

  const posts = [
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0077B5]',
      image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Business Strategy Insights',
      preview: 'How data-driven decision making transforms Nepali businesses',
      strategy: 'Our LinkedIn presence focuses on establishing thought leadership in business strategy and consulting. We share data-backed insights, case studies, and industry analysis that positions us as the go-to experts for business transformation in Nepal.',
      positioning: 'We position ourselves as strategic advisors who combine global best practices with deep local market knowledge. Our content educates C-suite executives and entrepreneurs on navigating Nepal\'s unique business landscape.',
    },
    {
      platform: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Visual Storytelling',
      preview: 'Behind the scenes of strategic consulting',
      strategy: 'Instagram serves as our visual storytelling platform, humanizing our brand through behind-the-scenes content, team insights, and visually compelling infographics. We use Stories for real-time updates and Reels for bite-sized strategy tips.',
      positioning: 'We showcase the people and processes behind successful strategies, making high-level consulting accessible and relatable. This builds trust and demonstrates our approachable yet professional culture.',
    },
    {
      platform: 'X (Twitter)',
      icon: Twitter,
      color: 'bg-black',
      image: 'https://images.pexels.com/photos/6954174/pexels-photo-6954174.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Real-Time Analysis',
      preview: 'Commentary on business and political developments',
      strategy: 'X is our platform for real-time commentary on business trends, political developments, and market movements. We provide quick insights and analysis that demonstrate our pulse on current events and ability to think strategically on the fly.',
      positioning: 'We establish ourselves as agile thinkers who can rapidly analyze complex situations and provide strategic perspectives. This positions us as dynamic advisors rather than slow-moving consultants.',
    },
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0077B5]',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Market Intelligence',
      preview: 'Weekly roundup of Nepal market trends',
      strategy: 'Our weekly market intelligence posts aggregate key business developments, regulatory changes, and emerging opportunities in Nepal. This positions us as the central hub for strategic business information.',
      positioning: 'By consistently providing valuable market intelligence, we become indispensable to our target audience, ensuring regular engagement and top-of-mind awareness when strategic consulting needs arise.',
    },
    {
      platform: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Team Expertise',
      preview: 'Meet the strategists shaping Nepal\'s future',
      strategy: 'Profile posts highlighting team members\' expertise, achievements, and insights. This humanizes our brand and showcases the depth of talent behind our consulting services.',
      positioning: 'We demonstrate that our team comprises highly qualified professionals with diverse expertise, building credibility and trust with potential clients who want to know who they\'ll be working with.',
    },
    {
      platform: 'X (Twitter)',
      icon: Twitter,
      color: 'bg-black',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Strategic Threads',
      preview: 'Deep-dive analysis on political strategy',
      strategy: 'Long-form thread analysis of political campaigns, election strategies, and governance trends. These threads showcase our analytical capabilities and political acumen without revealing client confidences.',
      positioning: 'We establish authority in political strategy by providing sophisticated analysis that demonstrates our ability to understand complex political dynamics and develop winning strategies.',
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            Digital Presence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic positioning across multiple platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post, index) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() =>
                  setSelectedPost({
                    platform: post.platform,
                    title: post.title,
                    strategy: post.strategy,
                    positioning: post.positioning,
                  })
                }
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 right-4 ${post.color} p-2 rounded-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    {post.platform}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2C3E50] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.preview}</p>
                  <div className="flex items-center text-[#C0392B] font-medium text-sm group-hover:translate-x-2 transition-transform">
                    <span>View Strategy</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Modal
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
        title={`${selectedPost?.platform} - ${selectedPost?.title}`}
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg text-[#2C3E50] mb-2">Strategy Intent</h3>
            <p className="text-gray-700 leading-relaxed">{selectedPost?.strategy}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#2C3E50] mb-2">Digital Positioning</h3>
            <p className="text-gray-700 leading-relaxed">{selectedPost?.positioning}</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}
