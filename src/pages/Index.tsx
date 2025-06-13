
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import VideoHighlightsSection from "@/components/VideoHighlightsSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import VenueSection from "@/components/VenueSection";
import SponsorsSection from "@/components/SponsorsSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BottomActionBar from "@/components/BottomActionBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* 1. Hero - First impression with event overview */}
      <HeroSection />
      
      {/* 2. Countdown - Creates urgency and importance */}
      <CountdownSection />
      
      {/* 3. Video Highlights - Shows event value through past success */}
      <VideoHighlightsSection />
      
      {/* 4. Agenda - Core content that attendees care about */}
      <section id="agenda">
        <AgendaSection />
      </section>
      
      {/* 5. Speakers - Authority and credibility */}
      <section id="speakers">
        <SpeakersSection />
      </section>
      
      {/* 6. Venue - Practical information */}
      <VenueSection />
      
      {/* 7. Registration - Call to action after value demonstration */}
      <section id="registration">
        <RegistrationSection />
      </section>
      
      {/* 8. Sponsors - Social proof and partnerships */}
      <section id="sponsors">
        <SponsorsSection />
      </section>
      
      <Footer />
      <BottomActionBar />
      
      {/* Add bottom padding for mobile to account for bottom action bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
};

export default Index;
