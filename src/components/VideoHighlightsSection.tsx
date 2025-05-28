
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Users, Award, Globe } from 'lucide-react';

const VideoHighlightsSection = () => {
  const videoHighlights = [
    {
      id: 1,
      title: 'INTA 2024 Highlights',
      description: 'Experience the energy and innovation from last year\'s event',
      thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop&auto=format',
      duration: '3:45',
      type: 'Event Highlights'
    },
    {
      id: 2,
      title: 'Keynote Speaker Preview',
      description: 'Hear from industry leaders who will shape the future of IP',
      thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop&auto=format',
      duration: '2:30',
      type: 'Speaker Preview'
    },
    {
      id: 3,
      title: 'Innovation Showcase',
      description: 'Discover cutting-edge solutions and technologies',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&auto=format',
      duration: '4:20',
      type: 'Innovation'
    }
  ];

  const testimonials = [
    {
      quote: "INTA's annual meeting is the premier gathering for IP professionals worldwide. The insights and connections I made were invaluable.",
      author: "Sarah Chen",
      title: "Chief IP Officer, TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b422?w=100&h=100&fit=crop&auto=format"
    },
    {
      quote: "The quality of content and networking opportunities at INTA are unmatched. It's where the future of intellectual property is shaped.",
      author: "Dr. Michael Rodriguez",
      title: "IP Strategy Consultant",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-inta-navy to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-inta-accent rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-inta-blue rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-inta-accent/20 backdrop-blur-sm rounded-full border border-inta-accent/30 mb-6">
            <span className="text-inta-accent font-semibold">Experience INTA</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            See INTA in Action
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Watch highlights from previous events and get a preview of what awaits you at INTA 2025
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {videoHighlights.map((video) => (
            <Card key={video.id} className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white/20 hover:bg-inta-accent backdrop-blur-sm border border-white/30 text-white hover:text-inta-navy transition-all duration-300 transform group-hover:scale-110"
                  >
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-inta-accent/80 backdrop-blur-sm text-inta-navy px-3 py-1 rounded-full text-xs font-semibold">
                    {video.type}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{video.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">What Attendees Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-left">
                <CardContent className="p-0">
                  <blockquote className="text-lg text-blue-100 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-blue-300 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-inta-accent/20 to-inta-blue/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex justify-center space-x-8 mb-6">
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-inta-accent" />
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-blue-200 text-sm">Global Attendees</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-inta-accent" />
                <div className="text-2xl font-bold">75+</div>
                <div className="text-blue-200 text-sm">Expert Sessions</div>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 mx-auto mb-2 text-inta-accent" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-blue-200 text-sm">Countries</div>
              </div>
            </div>
            <Button className="bg-inta-accent hover:bg-yellow-500 text-inta-navy font-bold text-lg px-8 py-4">
              Be Part of INTA 2025
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlightsSection;
