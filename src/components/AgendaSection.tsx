
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, Users, Search, Calendar, MessageCircle, Sparkles } from 'lucide-react';

const AgendaSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');

  const sessions = [
    {
      id: 1,
      title: 'AI and the Future of Trademark Law',
      time: '09:00 - 10:30',
      date: 'March 15',
      location: 'Main Auditorium',
      track: 'AI Innovation',
      speakers: ['Dr. Sarah Chen', 'Mark Rodriguez'],
      type: 'Keynote',
      summary: 'Exploring how artificial intelligence is transforming trademark examination and protection.',
      attendees: 450,
      hasQA: true
    },
    {
      id: 2,
      title: 'Global Brand Protection Strategies',
      time: '11:00 - 12:30',
      date: 'March 15',
      location: 'Conference Room A',
      track: 'Brand Protection',
      speakers: ['Alice Wang', 'James Miller'],
      type: 'Panel',
      summary: 'Best practices for protecting brands across international markets.',
      attendees: 320,
      hasQA: true
    },
    {
      id: 3,
      title: 'Digital Transformation in IP Management',
      time: '14:00 - 15:30',
      date: 'March 15',
      location: 'Tech Hub',
      track: 'Digital Innovation',
      speakers: ['Robert Kim', 'Lisa Thompson'],
      type: 'Workshop',
      summary: 'Hands-on session on implementing digital tools for IP portfolio management.',
      attendees: 180,
      hasQA: false
    }
  ];

  const tracks = [
    { value: 'all', label: 'All Tracks' },
    { value: 'AI Innovation', label: 'AI Innovation' },
    { value: 'Brand Protection', label: 'Brand Protection' },
    { value: 'Digital Innovation', label: 'Digital Innovation' }
  ];

  const filteredSessions = sessions.filter(session => {
    const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTrack = selectedTrack === 'all' || session.track === selectedTrack;
    return matchesSearch && matchesTrack;
  });

  return (
    <section id="agenda" className="py-20 bg-inta-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-inta-navy mb-4">Event Agenda</h2>
          <p className="text-lg text-inta-gray max-w-2xl mx-auto">
            Discover cutting-edge sessions, workshops, and networking opportunities across three action-packed days.
          </p>
        </div>

        {/* AI Summary Card */}
        <Card className="mb-8 border-2 border-inta-accent/20 bg-gradient-to-r from-inta-accent/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-inta-accent" />
              <span>AI-Generated Event Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-inta-gray">
              This year's agenda focuses on three key themes: AI integration in IP law, global brand protection strategies, 
              and digital transformation. With 75+ sessions across 4 tracks, attendees will gain actionable insights 
              from 150+ industry experts.
            </p>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-inta-gray w-4 h-4" />
            <Input
              placeholder="Search sessions or speakers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {tracks.map((track) => (
              <Button
                key={track.value}
                variant={selectedTrack === track.value ? "default" : "outline"}
                onClick={() => setSelectedTrack(track.value)}
                size="sm"
              >
                {track.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Day Tabs */}
        <Tabs defaultValue="march-15" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="march-15" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Day 1 - March 15</span>
            </TabsTrigger>
            <TabsTrigger value="march-16" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Day 2 - March 16</span>
            </TabsTrigger>
            <TabsTrigger value="march-17" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Day 3 - March 17</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="march-15" className="space-y-6">
            {filteredSessions.map((session) => (
              <Card key={session.id} className="hover:shadow-lg transition-shadow duration-300 animate-slide-in">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-inta-navy mb-2">{session.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-inta-gray mb-3">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{session.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{session.attendees} attendees</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge className="bg-inta-blue text-white">{session.type}</Badge>
                          <Badge variant="outline" className="border-inta-accent text-inta-accent">
                            {session.track}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-inta-gray mb-4">{session.summary}</p>

                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-sm font-medium text-inta-navy">Speakers:</span>
                        {session.speakers.map((speaker, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {speaker}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center space-x-4">
                        <Button size="sm" className="bg-inta-blue hover:bg-inta-navy">
                          Add to My Agenda
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {session.hasQA && (
                          <Button variant="ghost" size="sm" className="text-inta-accent">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Q&A Available
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="march-16" className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-inta-navy mb-2">Day 2 Sessions</h3>
              <p className="text-inta-gray">Advanced workshops and specialized tracks coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="march-17" className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-inta-navy mb-2">Day 3 Sessions</h3>
              <p className="text-inta-gray">Closing keynotes and networking events coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-inta-navy mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Export to Calendar</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Get AI Recommendations</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Chat with AI Assistant</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
