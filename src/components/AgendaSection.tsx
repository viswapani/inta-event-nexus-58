
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, MapPin, Users, Search, Calendar, MessageCircle, Sparkles, Bookmark, BookmarkCheck, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AgendaSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [bookmarkedSessions, setBookmarkedSessions] = useState<number[]>([]);
  const [currentTime] = useState(new Date('2025-03-15T10:15:00'));
  const { toast } = useToast();

  const timeSlots = [
    {
      time: '8:00 AM - 9:00 AM',
      sessions: [
        {
          id: 1,
          title: 'Registration & Continental Breakfast',
          location: 'Main Lobby',
          track: 'General',
          type: 'Registration',
          speakers: [],
          description: 'Welcome reception with breakfast and networking opportunities',
          capacity: 500,
          registered: 450
        }
      ]
    },
    {
      time: '9:00 AM - 10:30 AM',
      sessions: [
        {
          id: 2,
          title: 'AI and the Future of Trademark Law',
          location: 'Main Auditorium',
          track: 'AI Innovation',
          type: 'Keynote',
          speakers: ['Dr. Sarah Chen', 'Mark Rodriguez'],
          description: 'Exploring how artificial intelligence is transforming trademark examination and protection.',
          capacity: 450,
          registered: 420
        }
      ]
    },
    {
      time: '10:30 AM - 11:00 AM',
      sessions: [
        {
          id: 3,
          title: 'Coffee Break & Networking',
          location: 'Exhibition Hall',
          track: 'Networking',
          type: 'Break',
          speakers: [],
          description: 'Refreshments and sponsor exhibitions',
          capacity: 500,
          registered: 380
        }
      ]
    },
    {
      time: '11:00 AM - 12:30 PM',
      sessions: [
        {
          id: 4,
          title: 'Global Brand Protection Strategies',
          location: 'Conference Room A',
          track: 'Brand Protection',
          type: 'Panel',
          speakers: ['Alice Wang', 'James Miller', 'Roberto Silva'],
          description: 'Best practices for protecting brands across international markets and jurisdictions.',
          capacity: 200,
          registered: 185
        },
        {
          id: 5,
          title: 'Digital Evidence Collection Workshop',
          location: 'Tech Lab B',
          track: 'Digital Innovation',
          type: 'Workshop',
          speakers: ['Lisa Thompson', 'David Park'],
          description: 'Hands-on training for collecting and preserving digital evidence in IP cases.',
          capacity: 50,
          registered: 48
        },
        {
          id: 6,
          title: 'Small Business IP Clinic',
          location: 'Meeting Room C',
          track: 'Education',
          type: 'Clinic',
          speakers: ['Jennifer Adams', 'Michael Brown'],
          description: 'Free consultations and guidance for small business IP needs.',
          capacity: 30,
          registered: 25
        }
      ]
    },
    {
      time: '12:30 PM - 1:30 PM',
      sessions: [
        {
          id: 7,
          title: 'Lunch & Sponsor Presentations',
          location: 'Grand Ballroom',
          track: 'General',
          type: 'Lunch',
          speakers: ['Innovation Sponsors'],
          description: 'Networking lunch with brief sponsor technology demonstrations',
          capacity: 500,
          registered: 430
        }
      ]
    },
    {
      time: '1:30 PM - 3:00 PM',
      sessions: [
        {
          id: 8,
          title: 'Digital Transformation in IP Management',
          location: 'Main Auditorium',
          track: 'Digital Innovation',
          type: 'Panel',
          speakers: ['Robert Kim', 'Sarah Johnson', 'Alex Chen'],
          description: 'Implementing digital tools and automation for IP portfolio management.',
          capacity: 450,
          registered: 380
        },
        {
          id: 9,
          title: 'Copyright in the Digital Age',
          location: 'Conference Room A',
          track: 'Copyright',
          type: 'Session',
          speakers: ['Maria Garcia', 'Tom Wilson'],
          description: 'Navigating copyright challenges in streaming, AI, and digital content.',
          capacity: 200,
          registered: 175
        }
      ]
    }
  ];

  const tracks = [
    { value: 'all', label: 'All Tracks' },
    { value: 'AI Innovation', label: 'AI Innovation' },
    { value: 'Brand Protection', label: 'Brand Protection' },
    { value: 'Digital Innovation', label: 'Digital Innovation' },
    { value: 'Education', label: 'Education' },
    { value: 'Copyright', label: 'Copyright' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'Main Auditorium', label: 'Main Auditorium' },
    { value: 'Conference Room A', label: 'Conference Room A' },
    { value: 'Tech Lab B', label: 'Tech Lab B' },
    { value: 'Meeting Room C', label: 'Meeting Room C' },
    { value: 'Grand Ballroom', label: 'Grand Ballroom' }
  ];

  const sessionTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'Keynote', label: 'Keynote' },
    { value: 'Panel', label: 'Panel' },
    { value: 'Workshop', label: 'Workshop' },
    { value: 'Session', label: 'Session' }
  ];

  const getSessionStatus = (session: any, timeSlot: string) => {
    const now = currentTime;
    const [startTime] = timeSlot.split(' - ');
    const sessionDate = new Date(`2025-03-15T${convertTo24Hour(startTime)}:00`);
    const sessionEndTime = new Date(sessionDate.getTime() + 90 * 60 * 1000); // 90 minutes later
    
    if (now >= sessionDate && now <= sessionEndTime) {
      return { status: 'live', label: '🔴 Live Now', color: 'bg-red-500 text-white animate-pulse' };
    } else if (sessionDate > now && (sessionDate.getTime() - now.getTime()) <= 30 * 60 * 1000) {
      return { status: 'soon', label: '🕑 Starting Soon', color: 'bg-orange-500 text-white' };
    } else if (sessionDate < now) {
      return { status: 'ended', label: '✅ Completed', color: 'bg-gray-500 text-white' };
    }
    return { status: 'upcoming', label: '📅 Upcoming', color: 'bg-blue-500 text-white' };
  };

  const convertTo24Hour = (time12h: string) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = String(parseInt(hours, 10) + 12);
    }
    return `${hours}:${minutes || '00'}`;
  };

  const filteredTimeSlots = timeSlots.map(slot => ({
    ...slot,
    sessions: slot.sessions.filter(session => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = session.title.toLowerCase().includes(searchLower) ||
                           session.speakers.some(speaker => speaker.toLowerCase().includes(searchLower)) ||
                           session.track.toLowerCase().includes(searchLower) ||
                           session.location.toLowerCase().includes(searchLower) ||
                           session.description.toLowerCase().includes(searchLower);
      const matchesTrack = selectedTrack === 'all' || session.track === selectedTrack;
      const matchesLocation = selectedLocation === 'all' || session.location === selectedLocation;
      const matchesType = selectedType === 'all' || session.type === selectedType;
      return matchesSearch && matchesTrack && matchesLocation && matchesType;
    })
  })).filter(slot => slot.sessions.length > 0);

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

  const exportToCalendar = (session: any, timeSlot: string) => {
    const [startTime] = timeSlot.split(' - ');
    const startDate = new Date(`2025-03-15T${convertTo24Hour(startTime)}:00`);
    const endDate = new Date(startDate.getTime() + 90 * 60 * 1000);
    
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
DESCRIPTION:${session.description}\\nSpeakers: ${session.speakers.join(', ')}\\nLocation: ${session.location}
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
    <section id="agenda" className="py-12 bg-inta-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-inta-navy mb-4">Event Schedule</h2>
          <p className="text-lg text-inta-gray max-w-2xl mx-auto">
            Detailed daily schedule with sessions, workshops, and networking opportunities.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-inta-gray w-4 h-4" />
              <Input
                placeholder="Search sessions, speakers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedTrack} onValueChange={setSelectedTrack}>
              <SelectTrigger>
                <SelectValue placeholder="Track" />
              </SelectTrigger>
              <SelectContent>
                {tracks.map((track) => (
                  <SelectItem key={track.value} value={track.value}>
                    {track.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {sessionTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Day Tabs */}
        <Tabs defaultValue="march-15" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="march-15">
              <Calendar className="w-4 h-4 mr-2" />
              Friday, March 15
            </TabsTrigger>
            <TabsTrigger value="march-16">
              <Calendar className="w-4 h-4 mr-2" />
              Saturday, March 16
            </TabsTrigger>
            <TabsTrigger value="march-17">
              <Calendar className="w-4 h-4 mr-2" />
              Sunday, March 17
            </TabsTrigger>
          </TabsList>

          <TabsContent value="march-15" className="space-y-6">
            {/* Schedule Timeline */}
            <div className="space-y-4">
              {filteredTimeSlots.map((slot, slotIndex) => (
                <Card key={slotIndex} className="overflow-hidden">
                  <CardHeader className="bg-inta-navy text-white py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <h3 className="text-lg font-semibold">{slot.time}</h3>
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {slot.sessions.length} Session{slot.sessions.length !== 1 ? 's' : ''}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-gray-100">
                      {slot.sessions.map((session) => {
                        const sessionStatus = getSessionStatus(session, slot.time);
                        const isBookmarked = bookmarkedSessions.includes(session.id);
                        const attendancePercentage = Math.round((session.registered / session.capacity) * 100);
                        
                        return (
                          <div key={session.id} className="p-6 hover:bg-gray-50 transition-colors">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Badge className={sessionStatus.color}>
                                        {sessionStatus.label}
                                      </Badge>
                                      <Badge className="bg-inta-blue text-white">
                                        {session.type}
                                      </Badge>
                                      <Badge variant="outline" className="border-inta-accent text-inta-accent">
                                        {session.track}
                                      </Badge>
                                    </div>
                                    <h4 className="text-xl font-semibold text-inta-navy mb-2">
                                      {session.title}
                                    </h4>
                                    <p className="text-inta-gray mb-3">{session.description}</p>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleBookmark(session.id)}
                                    className={`ml-4 ${isBookmarked ? 'text-inta-accent' : 'text-inta-gray'}`}
                                  >
                                    {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                                  </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                  <div className="flex items-center space-x-2 text-sm text-inta-gray">
                                    <MapPin className="w-4 h-4" />
                                    <span>{session.location}</span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-sm text-inta-gray">
                                    <Users className="w-4 h-4" />
                                    <span>{session.registered}/{session.capacity} registered ({attendancePercentage}%)</span>
                                  </div>
                                  {session.speakers.length > 0 && (
                                    <div className="flex items-center space-x-2 text-sm text-inta-gray">
                                      <MessageCircle className="w-4 h-4" />
                                      <span>{session.speakers.join(', ')}</span>
                                    </div>
                                  )}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                  <Button 
                                    size="sm" 
                                    className="bg-inta-blue hover:bg-inta-navy"
                                    onClick={() => exportToCalendar(session, slot.time)}
                                  >
                                    <Calendar className="w-4 h-4 mr-1" />
                                    Add to Calendar
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                  {session.capacity - session.registered > 0 && (
                                    <Button variant="outline" size="sm" className="text-green-600 border-green-600">
                                      Register ({session.capacity - session.registered} spots left)
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="march-16" className="space-y-6">
            <div className="text-center py-16 bg-white rounded-lg">
              <h3 className="text-xl font-semibold text-inta-navy mb-2">Saturday, March 16</h3>
              <p className="text-inta-gray">Advanced workshops and specialized tracks schedule coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="march-17" className="space-y-6">
            <div className="text-center py-16 bg-white rounded-lg">
              <h3 className="text-xl font-semibold text-inta-navy mb-2">Sunday, March 17</h3>
              <p className="text-inta-gray">Closing keynotes and networking events schedule coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-inta-navy mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <BookmarkCheck className="w-4 h-4" />
              <span>My Bookmarks ({bookmarkedSessions.length})</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Export Full Schedule</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Get AI Recommendations</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
