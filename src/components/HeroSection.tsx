
import { Button } from '@/components/ui/button';
import { Calendar, Users, Globe, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, label: 'Speakers', value: '150+' },
    { icon: Calendar, label: 'Sessions', value: '75+' },
    { icon: Globe, label: 'Countries', value: '50+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-inta-navy/90 via-inta-blue/85 to-inta-navy/90"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-inta-accent rounded-full mix-blend-multiply filter blur-xl animate-fade-in"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-inta-blue rounded-full mix-blend-multiply filter blur-xl animate-fade-in animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-inta-accent rounded-full mix-blend-multiply filter blur-xl animate-fade-in animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="text-center text-white">
          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              INTA 2025
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-200 font-light">
              Annual Meeting
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl mb-8 text-blue-100">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-inta-accent" />
                <span>May 28-30, 2025</span>
              </div>
              <div className="hidden md:block w-2 h-2 bg-inta-accent rounded-full"></div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 mr-2 text-inta-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-in mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-inta-accent hover:bg-yellow-500 text-inta-navy font-bold text-lg px-8 py-4 h-auto"
              >
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-inta-navy font-bold text-lg px-8 py-4 h-auto bg-transparent"
              >
                <Calendar className="w-5 h-5 mr-2" />
                View Agenda
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-inta-accent" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
