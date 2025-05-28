import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Search, LinkedinIcon, Twitter, ExternalLink } from 'lucide-react';

const SpeakersSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const speakers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Chief Innovation Officer',
      company: 'TechLegal Innovations',
      track: 'AI Innovation',
      bio: 'Leading expert in AI applications for legal technology with 15+ years of experience in intellectual property law.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face',
      initials: 'SC',
      sessions: ['AI and the Future of Trademark Law', 'Machine Learning in IP Analysis'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Mark Rodriguez',
      title: 'Senior Partner',
      company: 'Global IP Associates',
      track: 'AI Innovation',
      bio: 'International trademark attorney specializing in cross-border brand protection and enforcement strategies.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face',
      initials: 'MR',
      sessions: ['AI and the Future of Trademark Law'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Alice Wang',
      title: 'Director of Brand Protection',
      company: 'Multinational Corp',
      track: 'Brand Protection',
      bio: 'Expert in global brand protection with extensive experience in anti-counterfeiting and enforcement.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face',
      initials: 'AW',
      sessions: ['Global Brand Protection Strategies', 'Anti-Counterfeiting Measures'],
      social: {
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'James Miller',
      title: 'IP Technology Consultant',
      company: 'Innovation Partners',
      track: 'Digital Innovation',
      bio: 'Technology consultant helping organizations modernize their IP management and protection strategies.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face',
      initials: 'JM',
      sessions: ['Digital Transformation in IP Management'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 5,
      name: 'Elena Rodriguez',
      title: 'Legal Tech Director',
      company: 'FutureLaw Inc',
      track: 'AI Innovation',
      bio: 'Pioneering the integration of AI and machine learning in legal practice management.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b2e5?w=400&h=400&fit=crop&crop=face',
      initials: 'ER',
      sessions: ['Future of Legal Practice'],
      social: {
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Michael Thompson',
      title: 'Brand Strategy Lead',
      company: 'Global Brands Co',
      track: 'Brand Protection',
      bio: 'Strategic brand protection expert with focus on digital transformation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      initials: 'MT',
      sessions: ['Digital Brand Protection'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filterSpeakersByTrack = (track: string) => {
    let filtered = speakers;
    
    if (track !== 'all') {
      filtered = filtered.filter(speaker => speaker.track === track);
    }
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(speaker =>
        speaker.name.toLowerCase().includes(search) ||
        speaker.company.toLowerCase().includes(search) ||
        speaker.title.toLowerCase().includes(search)
      );
    }
    
    return filtered;
  };

  const scrollToLetter = (letter: string) => {
    const speakerElements = document.querySelectorAll(`[data-speaker-letter="${letter}"]`);
    if (speakerElements.length > 0) {
      speakerElements[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const SpeakerGrid = ({ filteredSpeakers }: { filteredSpeakers: typeof speakers }) => (
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
  );

  return (
    <section id="speakers" className="py-20 bg-inta-light relative">
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
          <h2 className="text-4xl font-bold text-inta-navy mb-4">Featured Speakers</h2>
          <p className="text-lg text-inta-gray max-w-2xl mx-auto">
            Learn from industry leaders, innovators, and experts shaping the future of intellectual property.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-inta-gray w-4 h-4" />
            <Input
              placeholder="Search speakers, companies, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* A-Z Navigation */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-inta-navy mb-3">Jump to:</h3>
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-2">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  className="w-10 h-10 text-sm font-medium text-inta-gray hover:text-inta-blue hover:bg-inta-light rounded transition-colors duration-200 flex-shrink-0 flex items-center justify-center"
                >
                  {letter}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Tabs for Track Filtering */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Speakers</TabsTrigger>
            <TabsTrigger value="AI Innovation">AI Innovation</TabsTrigger>
            <TabsTrigger value="Brand Protection">Brand Protection</TabsTrigger>
            <TabsTrigger value="Digital Innovation">Digital Innovation</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filterSpeakersByTrack('all').map((speaker) => (
                <Card 
                  key={speaker.id} 
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105"
                  data-speaker-letter={speaker.name.charAt(0).toUpperCase()}
                >
                  <CardContent className="p-6">
                    {/* Speaker Image and Basic Info */}
                    <div className="text-center mb-4">
                      <Avatar className="w-20 h-20 mx-auto mb-3 ring-2 ring-inta-blue/20">
                        <AvatarImage src={speaker.image} alt={speaker.name} className="object-cover" />
                        <AvatarFallback className="bg-inta-blue text-white text-lg font-semibold">
                          {speaker.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold text-inta-navy mb-2">{speaker.name}</h3>
                      <p className="text-sm font-medium text-inta-blue mb-1">{speaker.title}</p>
                      <p className="text-sm text-inta-gray">{speaker.company}</p>
                    </div>

                    {/* Track Badge */}
                    <div className="flex justify-center mb-4">
                      <Badge className="bg-inta-accent/10 text-inta-accent border-inta-accent">
                        {speaker.track}
                      </Badge>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-inta-gray mb-4 line-clamp-3">{speaker.bio}</p>

                    {/* Sessions */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-inta-navy mb-2">Speaking at:</h4>
                      <div className="space-y-1">
                        {speaker.sessions.map((session, index) => (
                          <p key={index} className="text-xs text-inta-gray bg-inta-light px-2 py-1 rounded">
                            {session}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Social Links and Actions */}
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
                      <Button variant="ghost" size="sm" className="text-inta-blue hover:text-inta-navy">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="AI Innovation" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filterSpeakersByTrack('AI Innovation').map((speaker) => (
                <Card 
                  key={speaker.id} 
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105"
                  data-speaker-letter={speaker.name.charAt(0).toUpperCase()}
                >
                  <CardContent className="p-6">
                    {/* Speaker Image and Basic Info */}
                    <div className="text-center mb-4">
                      <Avatar className="w-20 h-20 mx-auto mb-3 ring-2 ring-inta-blue/20">
                        <AvatarImage src={speaker.image} alt={speaker.name} className="object-cover" />
                        <AvatarFallback className="bg-inta-blue text-white text-lg font-semibold">
                          {speaker.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold text-inta-navy mb-2">{speaker.name}</h3>
                      <p className="text-sm font-medium text-inta-blue mb-1">{speaker.title}</p>
                      <p className="text-sm text-inta-gray">{speaker.company}</p>
                    </div>

                    {/* Track Badge */}
                    <div className="flex justify-center mb-4">
                      <Badge className="bg-inta-accent/10 text-inta-accent border-inta-accent">
                        {speaker.track}
                      </Badge>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-inta-gray mb-4 line-clamp-3">{speaker.bio}</p>

                    {/* Sessions */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-inta-navy mb-2">Speaking at:</h4>
                      <div className="space-y-1">
                        {speaker.sessions.map((session, index) => (
                          <p key={index} className="text-xs text-inta-gray bg-inta-light px-2 py-1 rounded">
                            {session}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Social Links and Actions */}
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
                      <Button variant="ghost" size="sm" className="text-inta-blue hover:text-inta-navy">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="Brand Protection" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filterSpeakersByTrack('Brand Protection').map((speaker) => (
                <Card 
                  key={speaker.id} 
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105"
                  data-speaker-letter={speaker.name.charAt(0).toUpperCase()}
                >
                  <CardContent className="p-6">
                    {/* Speaker Image and Basic Info */}
                    <div className="text-center mb-4">
                      <Avatar className="w-20 h-20 mx-auto mb-3 ring-2 ring-inta-blue/20">
                        <AvatarImage src={speaker.image} alt={speaker.name} className="object-cover" />
                        <AvatarFallback className="bg-inta-blue text-white text-lg font-semibold">
                          {speaker.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold text-inta-navy mb-2">{speaker.name}</h3>
                      <p className="text-sm font-medium text-inta-blue mb-1">{speaker.title}</p>
                      <p className="text-sm text-inta-gray">{speaker.company}</p>
                    </div>

                    {/* Track Badge */}
                    <div className="flex justify-center mb-4">
                      <Badge className="bg-inta-accent/10 text-inta-accent border-inta-accent">
                        {speaker.track}
                      </Badge>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-inta-gray mb-4 line-clamp-3">{speaker.bio}</p>

                    {/* Sessions */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-inta-navy mb-2">Speaking at:</h4>
                      <div className="space-y-1">
                        {speaker.sessions.map((session, index) => (
                          <p key={index} className="text-xs text-inta-gray bg-inta-light px-2 py-1 rounded">
                            {session}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Social Links and Actions */}
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
                      <Button variant="ghost" size="sm" className="text-inta-blue hover:text-inta-navy">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="Digital Innovation" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filterSpeakersByTrack('Digital Innovation').map((speaker) => (
                <Card 
                  key={speaker.id} 
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105"
                  data-speaker-letter={speaker.name.charAt(0).toUpperCase()}
                >
                  <CardContent className="p-6">
                    {/* Speaker Image and Basic Info */}
                    <div className="text-center mb-4">
                      <Avatar className="w-20 h-20 mx-auto mb-3 ring-2 ring-inta-blue/20">
                        <AvatarImage src={speaker.image} alt={speaker.name} className="object-cover" />
                        <AvatarFallback className="bg-inta-blue text-white text-lg font-semibold">
                          {speaker.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold text-inta-navy mb-2">{speaker.name}</h3>
                      <p className="text-sm font-medium text-inta-blue mb-1">{speaker.title}</p>
                      <p className="text-sm text-inta-gray">{speaker.company}</p>
                    </div>

                    {/* Track Badge */}
                    <div className="flex justify-center mb-4">
                      <Badge className="bg-inta-accent/10 text-inta-accent border-inta-accent">
                        {speaker.track}
                      </Badge>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-inta-gray mb-4 line-clamp-3">{speaker.bio}</p>

                    {/* Sessions */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-inta-navy mb-2">Speaking at:</h4>
                      <div className="space-y-1">
                        {speaker.sessions.map((session, index) => (
                          <p key={index} className="text-xs text-inta-gray bg-inta-light px-2 py-1 rounded">
                            {session}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Social Links and Actions */}
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
                      <Button variant="ghost" size="sm" className="text-inta-blue hover:text-inta-navy">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* No Results */}
        {filterSpeakersByTrack('all').length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-inta-navy mb-4">No speakers found</h3>
            <p className="text-inta-gray">Try adjusting your search criteria.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-white rounded-lg p-8 text-center border-2 border-inta-accent/20 shadow-lg">
          <h3 className="text-2xl font-semibold text-inta-navy mb-4">Want to Connect?</h3>
          <p className="text-inta-gray mb-6">
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
