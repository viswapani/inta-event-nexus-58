
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-16 min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop"
          alt="Event hall with screens and attendees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inta-navy/90 via-inta-blue/80 to-inta-navy/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-inta-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Pre-sale Badge */}
          <Badge className="mb-6 bg-inta-accent text-inta-navy font-semibold px-4 py-2 text-sm animate-fade-in">
            🎉 Pre-sale Registration Now Open!
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            INTA EVENT
            <span className="block text-4xl md:text-6xl text-inta-accent">2028</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-300">
            Global Innovation & Technology Summit
          </p>

          <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto animate-fade-in delay-500">
            Join industry leaders, innovators, and visionaries for three days of cutting-edge insights, 
            networking, and the future of international trademark law and technology.
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12 animate-fade-in delay-700">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-inta-accent" />
              <span className="text-blue-200">March 15-17, 2028</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-inta-accent" />
              <span className="text-blue-200">San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-inta-accent" />
              <span className="text-blue-200">2,500+ Attendees</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in delay-1000">
            <Button size="lg" className="bg-inta-accent hover:bg-yellow-500 text-inta-navy font-semibold px-8 py-4 text-lg">
              Register Now - Early Bird
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-inta-navy px-8 py-4 text-lg"
            >
              View Agenda
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20 animate-fade-in delay-1200">
            <div className="text-center">
              <div className="text-3xl font-bold text-inta-accent">150+</div>
              <div className="text-blue-200">Speakers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-inta-accent">75+</div>
              <div className="text-blue-200">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-inta-accent">50+</div>
              <div className="text-blue-200">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="absolute bottom-8 right-8 hidden lg:block animate-fade-in delay-1500">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
          <div className="w-48 h-28 bg-white/20 rounded-lg flex items-center justify-center mb-2">
            <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-4 border-r-0 border-t-2 border-b-2 border-transparent border-l-white ml-1"></div>
            </div>
          </div>
          <p className="text-sm text-center">Event Highlights 2027</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
