import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import GettingStartedSection from '@/components/GettingStartedSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LearnMoreSection from '@/components/LearnMoreSection';
import PartnersSection from '@/components/PartnersSection';
import ReviewsSection from '@/components/ReviewsSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LearnMoreSection />
      <ReviewsSection />
      <GettingStartedSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
