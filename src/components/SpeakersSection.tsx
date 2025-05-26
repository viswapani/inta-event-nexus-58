
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, LinkedinIcon, Twitter, ExternalLink } from 'lucide-react';
import { apiService, Speaker } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const SpeakersSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSpeakers = async () => {
      setLoading(true);
      try {
        const data = await apiService.getSpeakers();
        setSpeakers(data);
      } catch (error) {
        console.error('Error loading speakers:', error);
        toast({
          title: 'Error',
          description: 'Failed to load speakers data',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, [toast]);

  // Extract unique tracks from speakers
  const filters = [
    { value: 'all', label: 'All Speakers' },
    ...Array.from(new Set(speakers.map(speaker => speaker.track)))
      .map(track => ({ value: track, label: track }))
  ];

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredSpeakers = speakers.filter(speaker => {
    const matchesSearch = speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         speaker.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         speaker.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || speaker.track === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const scrollToLetter = (letter: string) => {
    const speakerElements = document.querySelectorAll(`[data-speaker-letter="${letter}"]`);
    if (speakerElements.length > 0) {
      speakerElements[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return (
      <section id="speakers" className="py-12 bg-white relative min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-inta-navy mb-4">Loading Speakers...</h2>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-inta-blue mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="speakers" className="py-12 bg-white relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop"
          alt="Event background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 h-full">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-inta-navy mb-2">Featured Speakers</h2>
          <p className="text-base text-inta-gray max-w-2xl mx-auto">
            Learn from industry leaders, innovators, and experts shaping the future of intellectual property.
          </p>
        </div>

        {/* Compact Search and Filters */}
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-inta-gray w-4 h-4" />
              <Input
                placeholder="Search speakers, companies, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-10"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={selectedFilter === filter.value ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.value)}
                size="sm"
                className="h-10"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Compact A-Z Navigation */}
        <div className="mb-6 p-3 bg-inta-light rounded-lg">
          <h3 className="text-sm font-medium text-inta-navy mb-2">Jump to:</h3>
          <ScrollArea className="w-full">
            <div className="flex gap-1 pb-2">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  className="w-8 h-8 text-sm font-medium text-inta-gray hover:text-inta-blue hover:bg-white rounded transition-colors duration-200 flex-shrink-0"
                >
                  {letter}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Scrollable Speaker Grid */}
        <div className="flex-1 min-h-0">
          <ScrollArea className="h-[calc(100vh-280px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pr-4">
              {filteredSpeakers.map((speaker) => (
                <Card 
                  key={speaker.id} 
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105 h-fit"
                  data-speaker-letter={speaker.name.charAt(0).toUpperCase()}
                >
                  <CardContent className="p-4">
                    {/* Compact Speaker Image and Basic Info */}
                    <div className="text-center mb-3">
                      <Avatar className="w-16 h-16 mx-auto mb-2 ring-2 ring-inta-blue/20">
                        <AvatarImage src={speaker.image} alt={speaker.name} className="object-cover" />
                        <AvatarFallback className="bg-inta-blue text-white text-sm font-semibold">
                          {speaker.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-sm font-semibold text-inta-navy mb-1 line-clamp-2">{speaker.name}</h3>
                      <p className="text-xs font-medium text-inta-blue mb-1 line-clamp-1">{speaker.title}</p>
                      <p className="text-xs text-inta-gray line-clamp-1">{speaker.company}</p>
                    </div>

                    {/* Track Badge */}
                    <div className="flex justify-center mb-3">
                      <Badge className="bg-inta-accent/10 text-inta-accent border-inta-accent text-xs">
                        {speaker.track}
                      </Badge>
                    </div>

                    {/* Compact Bio */}
                    <p className="text-xs text-inta-gray mb-3 line-clamp-2">{speaker.bio}</p>

                    {/* Compact Sessions */}
                    <div className="mb-3">
                      <h4 className="text-xs font-medium text-inta-navy mb-1">Speaking at:</h4>
                      <ScrollArea className="h-12">
                        <div className="space-y-1">
                          {speaker.sessions.map((session, index) => (
                            <p key={index} className="text-xs text-inta-gray bg-inta-light px-2 py-1 rounded line-clamp-1">
                              {session}
                            </p>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>

                    {/* Compact Social Links and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {speaker.social.linkedin && (
                          <a 
                            href={speaker.social.linkedin}
                            className="text-inta-gray hover:text-inta-blue transition-colors duration-200"
                          >
                            <LinkedinIcon className="w-4 h-4" />
                          </a>
                        )}
                        {speaker.social.twitter && (
                          <a 
                            href={speaker.social.twitter}
                            className="text-inta-gray hover:text-inta-blue transition-colors duration-200"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="text-inta-blue hover:text-inta-navy h-8 px-2">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        <span className="text-xs">View</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* No Results - Compact */}
        {filteredSpeakers.length === 0 && (
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold text-inta-navy mb-2">No speakers found</h3>
            <p className="text-inta-gray">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Compact Call to Action */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-inta-navy mb-2">Want to Connect?</h3>
          <p className="text-inta-gray mb-4 text-sm">
            Join our networking sessions and connect with speakers directly during the event.
          </p>
          <Button className="bg-inta-blue hover:bg-inta-navy">
            View Networking Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
