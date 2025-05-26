
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Play, Image as ImageIcon } from 'lucide-react';
import { apiService, SponsorsData, MediaItem } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const SponsorsSection = () => {
  const [sponsors, setSponsors] = useState<SponsorsData>({ platinum: [], gold: [], silver: [] });
  const [mediaGallery, setMediaGallery] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [sponsorsData, mediaData] = await Promise.all([
          apiService.getSponsors(),
          apiService.getMediaGallery()
        ]);
        setSponsors(sponsorsData);
        setMediaGallery(mediaData);
      } catch (error) {
        console.error('Error loading sponsors and media:', error);
        toast({
          title: 'Error',
          description: 'Failed to load sponsors and media data',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  const SponsorCard = ({ sponsor, tier }: { sponsor: any, tier: string }) => {
    const tierColors = {
      platinum: 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300',
      gold: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300',
      silver: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
    };

    return (
      <Card className={`hover:shadow-xl transition-all duration-300 hover:scale-105 ${tierColors[tier as keyof typeof tierColors]}`}>
        <CardContent className="p-6 text-center">
          <div className="w-full h-24 bg-white rounded-lg flex items-center justify-center mb-4 border overflow-hidden">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="font-semibold text-inta-navy mb-2">{sponsor.name}</h3>
          <p className="text-sm text-inta-gray mb-4">{sponsor.description}</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full hover:bg-inta-blue hover:text-white"
            onClick={() => sponsor.website && window.open(sponsor.website, '_blank')}
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Visit Website
          </Button>
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <section id="sponsors" className="py-20 bg-inta-light relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-inta-navy mb-4">Loading Sponsors & Media...</h2>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-inta-blue mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

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
            {sponsors.platinum.length > 0 && (
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
            )}

            {/* Gold Sponsors */}
            {sponsors.gold.length > 0 && (
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
            )}

            {/* Silver Sponsors */}
            {sponsors.silver.length > 0 && (
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
            )}

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

            {/* Upload Section */}
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
