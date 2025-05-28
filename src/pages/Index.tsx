
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import VideoHighlightsSection from "@/components/VideoHighlightsSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import VenueSection from "@/components/VenueSection";
import SponsorsSection from "@/components/SponsorsSection";
import RegistrationForm from "@/components/RegistrationForm";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomActionBar from "@/components/BottomActionBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CountdownSection />
      <RegistrationForm />
      <VideoHighlightsSection />
      <section id="agenda">
        <AgendaSection />
      </section>
      <section id="speakers">
        <SpeakersSection />
      </section>
      <VenueSection />
      <section id="sponsors">
        <SponsorsSection />
      </section>
      <section id="chatbot">
        <ChatbotSection />
      </section>
      <Footer />
      <BottomActionBar />
      
      {/* Add bottom padding for mobile to account for bottom action bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
};

export default Index;
