
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, Users, Search, Calendar, Download, Smartphone, FileText, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import DateWiseAgenda from './DateWiseAgenda';
import { apiService, Program } from '@/services/api';

const AgendaSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPrograms = async () => {
      setLoading(true);
      try {
        const data = await apiService.getPrograms();
        setPrograms(data);
      } catch (error) {
        console.error('Error loading programs:', error);
        toast({
          title: 'Error',
          description: 'Failed to load program data',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, [toast]);

  // Extract unique tracks from programs
  const tracks = [
    { value: 'all', label: 'All Tracks' },
    ...Array.from(new Set(
      programs.flatMap(program => 
        program.days.flatMap(day => 
          day.sessions.map(session => session.track)
        )
      )
    )).map(track => ({ value: track, label: track }))
  ];

  const filteredPrograms = programs.map(program => ({
    ...program,
    days: program.days.map(day => ({
      ...day,
      sessions: day.sessions.filter(session => {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = session.title.toLowerCase().includes(searchLower) ||
                             session.speakers.some(speaker => speaker.toLowerCase().includes(searchLower)) ||
                             session.track.toLowerCase().includes(searchLower) ||
                             session.location.toLowerCase().includes(searchLower);
        const matchesTrack = selectedTrack === 'all' || session.track === selectedTrack;
        return matchesSearch && matchesTrack;
      })
    })).filter(day => day.sessions.length > 0)
  })).filter(program => program.days.length > 0);

  const handleDownload = (type: string) => {
    toast({
      title: `${type} Download`,
      description: `${type} download will begin shortly...`
    });
  };

  if (loading) {
    return (
      <section id="agenda" className="py-16 bg-gradient-to-br from-inta-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-inta-navy mb-6">Loading Schedule...</h2>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-inta-blue mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="agenda" className="py-16 bg-gradient-to-br from-inta-light to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-inta-navy mb-6">2025 Annual Meeting Schedule</h2>
          <p className="text-xl text-inta-gray max-w-3xl mx-auto leading-relaxed">
            Join us for three days of comprehensive programming designed for IP professionals at every stage of their career.
          </p>
        </div>

        {/* Quick Downloads Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-100">
          <h3 className="text-2xl font-semibold text-inta-navy mb-6 text-center">Event Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              onClick={() => handleDownload('Floorplan')}
              className="bg-inta-blue hover:bg-inta-navy text-white h-16 text-lg font-semibold"
            >
              <Download className="w-6 h-6 mr-3" />
              Download the Floorplan
            </Button>
            <Button 
              onClick={() => handleDownload('Mobile App')}
              className="bg-inta-accent hover:bg-orange-600 text-white h-16 text-lg font-semibold"
            >
              <Smartphone className="w-6 h-6 mr-3" />
              Download the Mobile App
            </Button>
            <Button 
              onClick={() => handleDownload('Schedule-at-a-Glance')}
              className="bg-inta-navy hover:bg-gray-800 text-white h-16 text-lg font-semibold"
            >
              <FileText className="w-6 h-6 mr-3" />
              Schedule-at-a-Glance
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-inta-gray w-5 h-5" />
              <Input
                placeholder="Search sessions, speakers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
            <Select value={selectedTrack} onValueChange={setSelectedTrack}>
              <SelectTrigger className="h-12 text-lg">
                <SelectValue placeholder="Filter by Track" />
              </SelectTrigger>
              <SelectContent>
                {tracks.map((track) => (
                  <SelectItem key={track.value} value={track.value}>
                    {track.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="h-12 text-lg border-inta-blue text-inta-blue hover:bg-inta-blue hover:text-white">
              <ExternalLink className="w-5 h-5 mr-2" />
              Full Schedule PDF
            </Button>
          </div>
        </div>

        {/* Tabbed View for Programs and Date-wise */}
        <Tabs defaultValue="programs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white shadow-md h-14">
            <TabsTrigger value="programs" className="text-lg font-semibold data-[state=active]:bg-inta-blue data-[state=active]:text-white">
              View by Programs
            </TabsTrigger>
            <TabsTrigger value="dates" className="text-lg font-semibold data-[state=active]:bg-inta-blue data-[state=active]:text-white">
              View by Date
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="programs">
            {/* Programs Accordion */}
            <div className="space-y-6">
              <Accordion type="multiple" className="space-y-4">
                {filteredPrograms.map((program) => (
                  <AccordionItem 
                    key={program.id} 
                    value={program.id}
                    className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-gray-50 text-left">
                      <div>
                        <h3 className="text-2xl font-bold text-inta-navy mb-2">{program.title}</h3>
                        <p className="text-inta-gray text-lg">{program.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pb-0">
                      <div className="border-t border-gray-200">
                        {program.days.map((day, dayIndex) => (
                          <div key={dayIndex} className="border-b border-gray-100 last:border-b-0">
                            <div className="bg-inta-navy text-white px-8 py-4">
                              <h4 className="text-xl font-semibold flex items-center">
                                <Calendar className="w-6 h-6 mr-3" />
                                {day.date}
                              </h4>
                            </div>
                            <div className="divide-y divide-gray-100">
                              {day.sessions.map((session, sessionIndex) => (
                                <div key={sessionIndex} className="px-8 py-6 hover:bg-gray-50 transition-colors">
                                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-3 mb-3">
                                        <Badge className="bg-inta-blue text-white px-3 py-1 text-sm">
                                          <Clock className="w-4 h-4 mr-1" />
                                          {session.time}
                                        </Badge>
                                        <Badge variant="outline" className="border-inta-accent text-inta-accent px-3 py-1 text-sm">
                                          {session.track}
                                        </Badge>
                                      </div>
                                      <h5 className="text-xl font-semibold text-inta-navy mb-3">{session.title}</h5>
                                      <p className="text-inta-gray mb-4 leading-relaxed">{session.description}</p>
                                      
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="flex items-center text-inta-gray">
                                          <MapPin className="w-5 h-5 mr-2" />
                                          <span className="font-medium">{session.location}</span>
                                        </div>
                                        {session.speakers.length > 0 && (
                                          <div className="flex items-center text-inta-gray">
                                            <Users className="w-5 h-5 mr-2" />
                                            <span className="font-medium">{session.speakers.join(', ')}</span>
                                          </div>
                                        )}
                                      </div>

                                      <div className="flex flex-wrap gap-3">
                                        <Button size="sm" className="bg-inta-blue hover:bg-inta-navy">
                                          <Calendar className="w-4 h-4 mr-2" />
                                          Add to Calendar
                                        </Button>
                                        <Button variant="outline" size="sm" className="border-inta-gray text-inta-gray hover:bg-inta-gray hover:text-white">
                                          Session Details
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
          
          <TabsContent value="dates">
            <DateWiseAgenda 
              programs={programs}
              searchTerm={searchTerm}
              selectedTrack={selectedTrack}
            />
          </TabsContent>
        </Tabs>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-inta-navy to-inta-blue rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
          <p className="text-lg mb-6">
            Download our mobile app for real-time updates, networking opportunities, and interactive features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-inta-navy hover:bg-gray-100 font-semibold">
              <Smartphone className="w-5 h-5 mr-2" />
              iOS App Store
            </Button>
            <Button className="bg-white text-inta-navy hover:bg-gray-100 font-semibold">
              <Smartphone className="w-5 h-5 mr-2" />
              Google Play Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
