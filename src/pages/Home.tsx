import Hero from '../components/Hero';
import Quotes from '../components/Quotes';
import InteractiveMap from '../components/InteractiveMap';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <main className="pt-24 bg-ink">
      <SEO 
        title="Himalaya Reach Consultant — Political Strategy & Campaign Management"
        description="A premier strategy firm in Kathmandu specializing exclusively in political strategy, campaign management, and strategic communications in Nepal."
      />
      <Hero />
      <InteractiveMap />
      <Quotes />
    </main>
  );
}
