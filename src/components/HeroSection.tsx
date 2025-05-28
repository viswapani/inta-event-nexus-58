import { Button } from '@/components/ui/button';
import { Calendar, Users, Globe, ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMainVideo, setCurrentMainVideo] = useState(0);
  
  const stats = [
    { icon: Users, label: 'Speakers', value: '150+' },
    { icon: Calendar, label: 'Sessions', value: '75+' },
    { icon: Globe, label: 'Countries', value: '50+' },
  ];

  const videoSlides = [
    {
      type: 'video',
      src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761',
      poster: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2112&q=80',
      title: 'Innovation in IP Law',
      subtitle: 'Shaping the Future of Intellectual Property'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=2112&q=80',
      title: 'Global Conference Center',
      subtitle: 'World-Class Event Venue'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2112&q=80',
      title: 'Technology & Innovation',
      subtitle: 'Digital Transformation in Law'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2112&q=80',
      title: 'Modern Conference Hall',
      subtitle: 'Premium Event Experience'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2112&q=80',
      title: 'Expert Panel Session',
      subtitle: 'Leading Industry Speakers Share Insights'
    }
  ];

  const mainVideoContent = [
    {
      type: 'video',
      src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761',
      poster: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'INTA 2024 Highlights'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'Conference Insights'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'Panel Discussion'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mainVideoTimer = setInterval(() => {
      setCurrentMainVideo((prev) => (prev + 1) % mainVideoContent.length);
    }, 6000);
    return () => clearInterval(mainVideoTimer);
  }, []);

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced Video/Image Background Slider */}
      <div className="absolute inset-0">
        {videoSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster={slide.poster}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.src}')` }}
              />
            )}
            
            {/* Slide-specific overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-inta-navy/95 via-inta-orange/85 to-inta-navy/95"></div>
            
            {/* Slide indicators */}
            <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
              {videoSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'bg-inta-accent scale-125' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-inta-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-inta-orange rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-inta-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="text-center text-white">
          {/* Dynamic Content Based on Current Slide */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white via-orange-100 to-inta-accent bg-clip-text text-transparent">
              INTA Annual Meeting 2025
            </h1>
            <p className="text-xl md:text-2xl mb-3 text-orange-200 font-light">
              {videoSlides[currentSlide].title}
            </p>
            <p className="text-base md:text-lg mb-6 text-orange-100/90">
              {videoSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-base mb-6 text-orange-100">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar className="w-4 h-4 mr-2 text-inta-accent" />
                <span>May 28-30, 2025</span>
              </div>
              <div className="hidden md:block w-2 h-2 bg-inta-accent rounded-full animate-pulse"></div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Globe className="w-4 h-4 mr-2 text-inta-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Compact Video/Image Display */}
          <div className="mb-6 animate-slide-in">
            <div className="max-w-2xl mx-auto mb-4">
              <div className="relative group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden bg-black relative shadow-2xl">
                  {mainVideoContent.map((content, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentMainVideo ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {content.type === 'video' ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          poster={content.poster}
                        >
                          <source src={content.src} type="video/mp4" />
                        </video>
                      ) : (
                        <img 
                          src={content.src}
                          alt={content.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white text-xl font-bold mb-2">{content.title}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-white/80 text-sm">LIVE</span>
                          </div>
                          {content.type === 'video' && (
                            <Play className="w-6 h-6 text-white/80" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Content navigation dots */}
                <div className="flex justify-center mt-3 space-x-2">
                  {mainVideoContent.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentMainVideo(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === currentMainVideo ? 'bg-inta-accent scale-125' : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-inta-orange/10 via-inta-accent/10 to-inta-orange/10 rounded-xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Compact Stats with Visual Effects */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-2">
                  <div className="w-10 h-10 mx-auto bg-inta-accent/20 rounded-full flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-inta-accent" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-orange-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/70 text-xs mt-1 font-medium">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
