import ServicesContent from '../components/Services';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <main className="pt-24 bg-white">
      <SEO 
        title="Services | Himalaya Reach Consultant"
        description="Comprehensive campaign strategy, intelligence & analytics, and digital narrative defense for political leaders in Nepal."
      />
      <ServicesContent />
    </main>
  );
}
