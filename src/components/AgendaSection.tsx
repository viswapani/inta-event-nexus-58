
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, Users, Search, Calendar, MessageCircle, Sparkles, Bookmark, BookmarkCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AgendaSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [bookmarkedSessions, setBookmarkedSessions] = useState<number[]>([]);
  const [currentTime] = useState(new Date('2025-03-15T10:15:00')); // Mock current time for demo
  const { toast } = useToast();

  const sessions = [
    {
      id: 1,
      title: 'AI and the Future of Trademark Law',
      time: '09:00 - 10:30',
      startTime: '09:00',
      endTime: '10:30',
      date: 'March 15',
      location: 'Main Auditorium',
      track: 'AI Innovation',
      speakers: ['Dr. Sarah Chen', 'Mark Rodriguez'],
      type: 'Keynote',
      summary: 'Exploring how artificial intelligence is transforming trademark examination and protection.',
      attendees: 450,
      hasQA: true,
      topics: ['AI', 'Machine Learning', 'Trademark Examination', 'Legal Tech']
    },
    {
      id: 2,
      title: 'Global Brand Protection Strategies',
      time: '11:00 - 12:30',
      startTime: '11:00',
      endTime: '12:30',
      date: 'March 15',
      location: 'Conference Room A',
      track: 'Brand Protection',
      speakers: ['Alice Wang', 'James Miller'],
      type: 'Panel',
      summary: 'Best practices for protecting brands across international markets.',
      attendees: 320,
      hasQA: true,
      topics: ['Brand Protection', 'International Law', 'Anti-Counterfeiting']
    },
    {
      id: 3,
      title: 'Digital Transformation in IP Management',
      time: '14:00 - 15:30',
      startTime: '14:00',
      endTime: '15:30',
      date: 'March 15',
      location: 'Tech Hub',
      track: 'Digital Innovation',
      speakers: ['Robert Kim', 'Lisa Thompson'],
      type: 'Workshop',
      summary: 'Hands-on session on implementing digital tools for IP portfolio management.',
      attendees: 180,
      hasQA: false,
      topics: ['Digital Tools', 'IP Management', 'Portfolio Management', 'Technology']
    }
  ];

  const tracks = [
    { value: 'all', label: 'All Tracks' },
    { value: 'AI Innovation', label: 'AI Innovation' },
    { value: 'Brand Protection', label: 'Brand Protection' },
    { value: 'Digital Innovation', label: 'Digital Innovation' }
  ];

  const getSessionStatus = (session: any) => {
    const now = currentTime;
    const sessionDate = new Date(`2025-03-15T${session.startTime}:00`);
    const sessionEndDate = new Date(`2025-03-15T${session.endTime}:00`);
    
    if (now >= sessionDate && now <= sessionEndDate) {
      return { status: 'live', label: '🔴 Live Now', color: 'bg-red-500 text-white' };
    } else if (sessionDate > now && (sessionDate.getTime() - now.getTime()) <= 30 * 60 * 1000) {
      return { status: 'soon', label: '🕑 Starting Soon', color: 'bg-orange-500 text-white' };
    } else if (sessionDate < now) {
      return { status: 'ended', label: '✅ Completed', color: 'bg-gray-500 text-white' };
    }
    return { status: 'upcoming', label: '📅 Upcoming', color: 'bg-blue-500 text-white' };
  };

  const filteredSessions = sessions.filter(session => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = session.title.toLowerCase().includes(searchLower) ||
                         session.speakers.some(speaker => speaker.toLowerCase().includes(searchLower)) ||
                         session.topics.some(topic => topic.toLowerCase().includes(searchLower)) ||
                         session.track.toLowerCase().includes(searchLower) ||
                         session.location.toLowerCase().includes(searchLower);
    const matchesTrack = selectedTrack === 'all' || session.track === selectedTrack;
    return matchesSearch && matchesTrack;
  });

  const toggleBookmark = (sessionId: number) => {
    setBookmarkedSessions(prev => {
      const isBookmarked = prev.includes(sessionId);
      const newBookmarks = isBookmarked 
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId];
      
      toast({
        title: isBookmarked ? "Bookmark Removed" : "Session Bookmarked",
        description: isBookmarked 
          ? "Session removed from your agenda" 
          : "Session added to your personal agenda"
      });
      
      return newBookmarks;
    });
  };

  const exportToCalendar = (session: any) => {
    const startDate = new Date(`2025-03-15T${session.startTime}:00`);
    const endDate = new Date(`2025-03-15T${session.endTime}:00`);
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const calendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${session.title}
DESCRIPTION:${session.summary}\\nSpeakers: ${session.speakers.join(', ')}\\nLocation: ${session.location}
LOCATION:${session.location}
END:VEVENT
END:VCALENDAR`;
    
    const link = document.createElement('a');
    link.href = calendarUrl;
    link.download = `${session.title.replace(/\s+/g, '_')}.ics`;
    link.click();
    
    toast({
      title: "Calendar Event Created",
      description: "Session exported to your calendar"
    });
  };

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

        {/* Enhanced Search and Filters */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-inta-gray w-4 h-4" />
            <Input
              placeholder="Search by session, speaker, topic, track, or location..."
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
            {/* 2-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredSessions.map((session) => {
                const sessionStatus = getSessionStatus(session);
                const isBookmarked = bookmarkedSessions.includes(session.id);
                
                return (
                  <Card key={session.id} className="hover:shadow-lg transition-shadow duration-300 animate-slide-in">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          {/* Status Badge */}
                          <Badge className={`mb-3 ${sessionStatus.color} animate-pulse`}>
                            {sessionStatus.label}
                          </Badge>
                          
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
                        
                        {/* Bookmark Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleBookmark(session.id)}
                          className={`ml-2 ${isBookmarked ? 'text-inta-accent' : 'text-inta-gray'}`}
                        >
                          {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                        </Button>
                      </div>

                      {/* Track and Type Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-inta-blue text-white">{session.type}</Badge>
                        <Badge variant="outline" className="border-inta-accent text-inta-accent">
                          {session.track}
                        </Badge>
                      </div>

                      <p className="text-inta-gray mb-4">{session.summary}</p>

                      {/* Topics */}
                      <div className="mb-4">
                        <h4 className="text-xs font-medium text-inta-navy mb-2">Topics:</h4>
                        <div className="flex flex-wrap gap-1">
                          {session.topics.map((topic, index) => (
                            <span key={index} className="text-xs bg-inta-light px-2 py-1 rounded text-inta-gray">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Speakers */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-sm font-medium text-inta-navy">Speakers:</span>
                        {session.speakers.map((speaker, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {speaker}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2">
                        <Button 
                          size="sm" 
                          className="bg-inta-blue hover:bg-inta-navy"
                          onClick={() => exportToCalendar(session)}
                        >
                          <Calendar className="w-4 h-4 mr-1" />
                          Add to Calendar
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
                    </CardContent>
                  </Card>
                );
              })}
            </div>
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
              <BookmarkCheck className="w-4 h-4" />
              <span>View My Bookmarks ({bookmarkedSessions.length})</span>
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
