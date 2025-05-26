import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Play, Crown, Award, Medal } from 'lucide-react';

const SponsorsSection = () => {
  const sponsors = {
    platinum: [
      { 
        name: 'TechLegal Corp', 
        logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop', 
        description: 'Leading AI solutions for legal professionals',
        website: 'https://example.com'
      },
      { 
        name: 'Global IP Solutions', 
        logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=100&fit=crop', 
        description: 'Worldwide trademark protection services',
        website: 'https://example.com'
      }
    ],
    gold: [
      { 
        name: 'Innovation Partners', 
        logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=75&fit=crop', 
        description: 'IP consulting and strategy',
        website: 'https://example.com'
      },
      { 
        name: 'Brand Protect Inc', 
        logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=75&fit=crop', 
        description: 'Anti-counterfeiting solutions',
        website: 'https://example.com'
      },
      { 
        name: 'Legal Tech Hub', 
        logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=75&fit=crop', 
        description: 'Digital transformation for law firms',
        website: 'https://example.com'
      }
    ],
    silver: [
      { 
        name: 'IP Analytics', 
        logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=120&h=60&fit=crop', 
        description: 'Data-driven IP insights',
        website: 'https://example.com'
      },
      { 
        name: 'Trademark Tools', 
        logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=120&h=60&fit=crop', 
        description: 'Software for trademark management',
        website: 'https://example.com'
      },
      { 
        name: 'Global Legal Network', 
        logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=120&h=60&fit=crop', 
        description: 'International legal services',
        website: 'https://example.com'
      },
      { 
        name: 'Digital Rights Co', 
        logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=120&h=60&fit=crop', 
        description: 'Online brand protection',
        website: 'https://example.com'
      }
    ]
  };

  const mediaGallery = [
    { 
      id: 1, 
      type: 'image', 
      title: 'Opening Ceremony 2027', 
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop', 
      date: 'Day 1' 
    },
    { 
      id: 2, 
      type: 'video', 
      title: 'Keynote Highlights', 
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop', 
      date: 'Day 1' 
    },
    { 
      id: 3, 
      type: 'image', 
      title: 'Networking Session', 
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop', 
      date: 'Day 2' 
    },
    { 
      id: 4, 
      type: 'video', 
      title: 'Panel Discussion', 
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop', 
      date: 'Day 2' 
    },
    { 
      id: 5, 
      type: 'image', 
      title: 'Innovation Showcase', 
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop', 
      date: 'Day 3' 
    },
    { 
      id: 6, 
      type: 'video', 
      title: 'Closing Remarks', 
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop', 
      date: 'Day 3' 
    }
  ];

  const SponsorCard = ({ sponsor, tier }: { sponsor: any, tier: string }) => {
    const tierConfig = {
      platinum: {
        colors: 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-400',
        icon: <Crown className="w-6 h-6 text-gray-600" />,
        textColor: 'text-gray-800'
      },
      gold: {
        colors: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-400',
        icon: <Award className="w-6 h-6 text-yellow-600" />,
        textColor: 'text-yellow-800'
      },
      silver: {
        colors: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300',
        icon: <Medal className="w-6 h-6 text-gray-500" />,
        textColor: 'text-gray-700'
      }
    };

    const config = tierConfig[tier as keyof typeof tierConfig];

    return (
      <Card className={`hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${config.colors}`}>
        <CardContent className="p-6 text-center">
          <div className="w-full h-24 bg-white rounded-lg flex items-center justify-center mb-4 border overflow-hidden shadow-sm">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center mb-2">
            {config.icon}
            <h3 className={`font-semibold ml-2 ${config.textColor}`}>{sponsor.name}</h3>
          </div>
          <p className="text-sm text-inta-gray mb-4">{sponsor.description}</p>
          <Button variant="outline" size="sm" className="w-full hover:bg-inta-blue hover:text-white">
            <ExternalLink className="w-3 h-3 mr-1" />
            Visit Website
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="sponsors" className="py-20 bg-inta-light relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop"
          alt="Event background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-inta-navy mb-4">Our Partners & Media</h2>
          <p className="text-lg text-inta-gray max-w-2xl mx-auto">
            Meet our amazing sponsors and explore media content from past events.
          </p>
        </div>

        <Tabs defaultValue="sponsors" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="sponsors">Our Sponsors</TabsTrigger>
            <TabsTrigger value="media">Media Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="sponsors" className="space-y-12">
            {/* Platinum Sponsors */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <Badge className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-3 text-xl font-bold flex items-center gap-2">
                  <Crown className="w-6 h-6" />
                  Platinum Partners
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {sponsors.platinum.map((sponsor, index) => (
                  <SponsorCard key={index} sponsor={sponsor} tier="platinum" />
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 text-xl font-bold flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Gold Partners
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sponsors.gold.map((sponsor, index) => (
                  <SponsorCard key={index} sponsor={sponsor} tier="gold" />
                ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <Badge className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-8 py-3 text-xl font-bold flex items-center gap-2">
                  <Medal className="w-6 h-6" />
                  Silver Partners
                </Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sponsors.silver.map((sponsor, index) => (
                  <SponsorCard key={index} sponsor={sponsor} tier="silver" />
                ))}
              </div>
            </div>

            {/* Sponsorship CTA */}
            <div className="bg-white rounded-lg p-8 text-center border-2 border-inta-accent/20 shadow-lg">
              <h3 className="text-2xl font-semibold text-inta-navy mb-4">Become a Sponsor</h3>
              <p className="text-inta-gray mb-6">
                Join industry leaders in supporting the future of intellectual property innovation.
              </p>
              <Button className="bg-inta-accent hover:bg-yellow-500 text-inta-navy font-semibold">
                View Sponsorship Packages
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="media" className="space-y-8">
            {/* Media section - keep existing implementation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="default" size="sm">All Media</Button>
              <Button variant="outline" size="sm">Day 1</Button>
              <Button variant="outline" size="sm">Day 2</Button>
              <Button variant="outline" size="sm">Day 3</Button>
              <Button variant="outline" size="sm">Videos Only</Button>
              <Button variant="outline" size="sm">Photos Only</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaGallery.map((item) => (
                <Card key={item.id} className="hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      )}
                      <Badge className="absolute top-2 right-2 bg-white/90 text-inta-navy">
                        {item.date}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-inta-navy mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-inta-gray capitalize">{item.type}</span>
                        <Button variant="ghost" size="sm" className="text-inta-blue hover:text-inta-navy">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg p-8 text-center border-2 border-dashed border-inta-gray/30 shadow-lg">
              <h3 className="text-xl font-semibold text-inta-navy mb-4">Share Your Event Photos</h3>
              <p className="text-inta-gray mb-6">
                Help us capture memories! Upload your photos from the event.
              </p>
              <Button variant="outline" className="border-inta-blue text-inta-blue hover:bg-inta-blue hover:text-white">
                Upload Photos
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SponsorsSection;
