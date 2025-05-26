
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, LinkedinIcon, Twitter, ExternalLink } from 'lucide-react';

const SpeakersSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const speakers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Chief Innovation Officer',
      company: 'TechLegal Innovations',
      track: 'AI Innovation',
      bio: 'Leading expert in AI applications for legal technology with 15+ years of experience in intellectual property law.',
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
      initials: 'JM',
      sessions: ['Digital Transformation in IP Management'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const filters = [
    { value: 'all', label: 'All Speakers' },
    { value: 'AI Innovation', label: 'AI Innovation' },
    { value: 'Brand Protection', label: 'Brand Protection' },
    { value: 'Digital Innovation', label: 'Digital Innovation' }
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

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-inta-navy mb-4">Featured Speakers</h2>
          <p className="text-lg text-inta-gray max-w-2xl mx-auto">
            Learn from industry leaders, innovators, and experts shaping the future of intellectual property.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-inta-gray w-4 h-4" />
              <Input
                placeholder="Search speakers, companies, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
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
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* A-Z Navigation */}
        <div className="mb-8 p-4 bg-inta-light rounded-lg">
          <h3 className="text-sm font-medium text-inta-navy mb-3">Jump to:</h3>
          <div className="flex flex-wrap gap-1">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                className="w-8 h-8 text-sm font-medium text-inta-gray hover:text-inta-blue hover:bg-white rounded transition-colors duration-200"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Speaker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpeakers.map((speaker) => (
            <Card 
              key={speaker.id} 
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              data-speaker-letter={speaker.name.charAt(0).toUpperCase()}
            >
              <CardContent className="p-6">
                {/* Speaker Image and Basic Info */}
                <div className="text-center mb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-3">
                    <AvatarImage src={speaker.image} alt={speaker.name} />
                    <AvatarFallback className="bg-inta-blue text-white text-lg font-semibold">
                      {speaker.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-inta-navy mb-1">{speaker.name}</h3>
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
                  <h4 className="text-xs font-medium text-inta-navy mb-2">Speaking at:</h4>
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
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredSpeakers.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-inta-navy mb-2">No speakers found</h3>
            <p className="text-inta-gray">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
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
