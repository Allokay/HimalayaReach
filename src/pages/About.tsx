import AboutContent from '../components/About';
import SEO from '../components/SEO';

export default function About() {
  return (
    <main className="pt-24 bg-white">
      <SEO 
        title="About Us | Himalaya Reach Consultant"
        description="A premier strategy house operating at the intersection of data science and political intelligence in Nepal."
      />
      <AboutContent />
    </main>
  );
}
