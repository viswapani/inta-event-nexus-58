
import { Button } from '@/components/ui/button';
import { Calendar, Users, Globe, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, label: 'Speakers', value: '150+' },
    { icon: Calendar, label: 'Sessions', value: '75+' },
    { icon: Globe, label: 'Countries', value: '50+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2112&q=80"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2112&q=80')`
          }}
        />
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-inta-navy/95 via-inta-orange/90 to-inta-navy/95"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-inta-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-inta-orange rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-inta-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="text-center text-white">
          {/* Main Content with Enhanced Typography */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <div className="inline-block px-6 py-3 bg-inta-accent/20 backdrop-blur-sm rounded-full border border-inta-accent/30 mb-6">
                <span className="text-inta-accent font-semibold text-lg">Annual Meeting 2025</span>
              </div>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-orange-100 to-inta-accent bg-clip-text text-transparent">
              INTA 2025
            </h1>
            <p className="text-3xl md:text-4xl mb-4 text-orange-200 font-light">
              Intellectual Property Excellence
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl mb-8 text-orange-100">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar className="w-6 h-6 mr-2 text-inta-accent" />
                <span>May 28-30, 2025</span>
              </div>
              <div className="hidden md:block w-2 h-2 bg-inta-accent rounded-full animate-pulse"></div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Globe className="w-6 h-6 mr-2 text-inta-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="animate-slide-in mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-inta-accent hover:bg-inta-orange text-inta-navy font-bold text-xl px-10 py-6 h-auto shadow-2xl hover:shadow-inta-accent/25 transition-all duration-300 hover:scale-105"
              >
                Register Now
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-inta-navy font-bold text-xl px-10 py-6 h-auto bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Play className="w-6 h-6 mr-3" />
                Watch Preview
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-inta-accent text-inta-accent hover:bg-inta-accent hover:text-inta-navy font-bold text-xl px-10 py-6 h-auto bg-transparent transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-6 h-6 mr-3" />
                View Agenda
              </Button>
            </div>
          </div>

          {/* Enhanced Stats with Visual Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-8 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-inta-accent/20 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="w-10 h-10 text-inta-accent" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-orange-200 text-xl font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-2 h-4 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/70 text-sm mt-2 font-medium">Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;
