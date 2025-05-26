
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Play, Image as ImageIcon } from 'lucide-react';

const SponsorsSection = () => {
  const sponsors = {
    platinum: [
      { name: 'TechLegal Corp', logo: '', description: 'Leading AI solutions for legal professionals' },
      { name: 'Global IP Solutions', logo: '', description: 'Worldwide trademark protection services' }
    ],
    gold: [
      { name: 'Innovation Partners', logo: '', description: 'IP consulting and strategy' },
      { name: 'Brand Protect Inc', logo: '', description: 'Anti-counterfeiting solutions' },
      { name: 'Legal Tech Hub', logo: '', description: 'Digital transformation for law firms' }
    ],
    silver: [
      { name: 'IP Analytics', logo: '', description: 'Data-driven IP insights' },
      { name: 'Trademark Tools', logo: '', description: 'Software for trademark management' },
      { name: 'Global Legal Network', logo: '', description: 'International legal services' },
      { name: 'Digital Rights Co', logo: '', description: 'Online brand protection' }
    ]
  };

  const mediaGallery = [
    { id: 1, type: 'image', title: 'Opening Ceremony 2027', thumbnail: '', date: 'Day 1' },
    { id: 2, type: 'video', title: 'Keynote Highlights', thumbnail: '', date: 'Day 1' },
    { id: 3, type: 'image', title: 'Networking Session', thumbnail: '', date: 'Day 2' },
    { id: 4, type: 'video', title: 'Panel Discussion', thumbnail: '', date: 'Day 2' },
    { id: 5, type: 'image', title: 'Innovation Showcase', thumbnail: '', date: 'Day 3' },
    { id: 6, type: 'video', title: 'Closing Remarks', thumbnail: '', date: 'Day 3' }
  ];

  const SponsorCard = ({ sponsor, tier }: { sponsor: any, tier: string }) => {
    const tierColors = {
      platinum: 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300',
      gold: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300',
      silver: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
    };

    return (
      <Card className={`hover:shadow-lg transition-shadow duration-300 ${tierColors[tier as keyof typeof tierColors]}`}>
        <CardContent className="p-6 text-center">
          <div className="w-full h-24 bg-white rounded-lg flex items-center justify-center mb-4 border">
            <span className="text-sm text-inta-gray">{sponsor.name}</span>
          </div>
          <h3 className="font-semibold text-inta-navy mb-2">{sponsor.name}</h3>
          <p className="text-sm text-inta-gray mb-4">{sponsor.description}</p>
          <Button variant="outline" size="sm" className="w-full">
            <ExternalLink className="w-3 h-3 mr-1" />
            Visit Website
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="sponsors" className="py-20 bg-inta-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-inta-navy mb-4">Sponsors & Media</h2>
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
                <Badge className="bg-gray-800 text-white px-6 py-2 text-lg font-semibold">
                  Platinum Partners
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sponsors.platinum.map((sponsor, index) => (
                  <SponsorCard key={index} sponsor={sponsor} tier="platinum" />
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <Badge className="bg-inta-accent text-inta-navy px-6 py-2 text-lg font-semibold">
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
                <Badge className="bg-gray-400 text-white px-6 py-2 text-lg font-semibold">
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
            <div className="bg-white rounded-lg p-8 text-center border-2 border-inta-accent/20">
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
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="default" size="sm">All Media</Button>
              <Button variant="outline" size="sm">Day 1</Button>
              <Button variant="outline" size="sm">Day 2</Button>
              <Button variant="outline" size="sm">Day 3</Button>
              <Button variant="outline" size="sm">Videos Only</Button>
              <Button variant="outline" size="sm">Photos Only</Button>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaGallery.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative w-full h-48 bg-gradient-to-br from-inta-blue to-inta-navy rounded-t-lg flex items-center justify-center overflow-hidden">
                      {item.type === 'video' ? (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      ) : (
                        <ImageIcon className="w-12 h-12 text-white/70" />
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

            {/* Upload Section */}
            <div className="bg-white rounded-lg p-8 text-center border-2 border-dashed border-inta-gray/30">
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
