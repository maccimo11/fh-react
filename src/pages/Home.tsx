import { Hero } from '../components/Hero';
import { Manifesto } from '../components/Manifesto';
import { Showcase } from '../components/Showcase';
import { ServicesGrid } from '../components/ServicesGrid';
import { Stats } from '../components/Stats';
import { CTABanner } from '../components/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Showcase />
      <ServicesGrid />
      <Stats />
      <CTABanner />
    </>
  );
}
