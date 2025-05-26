
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AgendaSection from '@/components/AgendaSection';
import SpeakersSection from '@/components/SpeakersSection';
import SponsorsSection from '@/components/SponsorsSection';
import ChatbotSection from '@/components/ChatbotSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AgendaSection />
      <SpeakersSection />
      <SponsorsSection />
      <ChatbotSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
