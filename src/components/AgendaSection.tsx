
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, MapPin, Users, Search, Calendar, Download, Smartphone, FileText, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AgendaSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const { toast } = useToast();

  const programs = [
    {
      id: 'main-conference',
      title: 'Main Conference Program',
      description: 'Core sessions, keynotes, and networking events',
      days: [
        {
          date: 'Friday, March 15, 2025',
          sessions: [
            {
              time: '8:00 AM - 9:00 AM',
              title: 'Registration & Continental Breakfast',
              location: 'Main Lobby',
              track: 'General',
              speakers: [],
              description: 'Welcome reception with breakfast and networking opportunities'
            },
            {
              time: '9:00 AM - 10:30 AM',
              title: 'Opening Keynote: AI and the Future of Trademark Law',
              location: 'Main Auditorium',
              track: 'AI Innovation',
              speakers: ['Dr. Sarah Chen', 'Mark Rodriguez'],
              description: 'Exploring how artificial intelligence is transforming trademark examination and protection strategies in the digital age.'
            },
            {
              time: '10:30 AM - 11:00 AM',
              title: 'Coffee Break & Networking',
              location: 'Exhibition Hall',
              track: 'Networking',
              speakers: [],
              description: 'Refreshments and sponsor exhibitions'
            },
            {
              time: '11:00 AM - 12:30 PM',
              title: 'Global Brand Protection Strategies',
              location: 'Conference Room A',
              track: 'Brand Protection',
              speakers: ['Alice Wang', 'James Miller', 'Roberto Silva'],
              description: 'Best practices for protecting brands across international markets and jurisdictions.'
            }
          ]
        },
        {
          date: 'Saturday, March 16, 2025',
          sessions: [
            {
              time: '9:00 AM - 10:30 AM',
              title: 'Digital Evidence Collection Workshop',
              location: 'Tech Lab B',
              track: 'Digital Innovation',
              speakers: ['Lisa Thompson', 'David Park'],
              description: 'Hands-on training for collecting and preserving digital evidence in IP cases.'
            },
            {
              time: '11:00 AM - 12:30 PM',
              title: 'Copyright in the Digital Age',
              location: 'Conference Room A',
              track: 'Copyright',
              speakers: ['Maria Garcia', 'Tom Wilson'],
              description: 'Navigating copyright challenges in streaming, AI, and digital content.'
            }
          ]
        }
      ]
    },
    {
      id: 'young-professionals',
      title: 'Young Professionals Program',
      description: 'Specialized sessions for emerging IP professionals',
      days: [
        {
          date: 'Friday, March 15, 2025',
          sessions: [
            {
              time: '2:00 PM - 3:30 PM',
              title: 'Career Development in IP Law',
              location: 'Meeting Room C',
              track: 'Career Development',
              speakers: ['Jennifer Adams', 'Michael Brown'],
              description: 'Essential skills and strategies for building a successful career in intellectual property.'
            },
            {
              time: '4:00 PM - 5:30 PM',
              title: 'Networking Mixer for Young Professionals',
              location: 'Rooftop Terrace',
              track: 'Networking',
              speakers: [],
              description: 'Casual networking event with drinks and appetizers for professionals under 35.'
            }
          ]
        }
      ]
    },
    {
      id: 'corporate-counsel',
      title: 'Corporate Counsel Program',
      description: 'In-house perspective on IP management and strategy',
      days: [
        {
          date: 'Saturday, March 16, 2025',
          sessions: [
            {
              time: '9:00 AM - 10:30 AM',
              title: 'Managing Global IP Portfolios',
              location: 'Executive Boardroom',
              track: 'Portfolio Management',
              speakers: ['Rebecca Kim', 'John Anderson'],
              description: 'Strategic approaches to managing international trademark and patent portfolios from an in-house perspective.'
            },
            {
              time: '11:00 AM - 12:30 PM',
              title: 'Budget Planning for IP Departments',
              location: 'Executive Boardroom',
              track: 'Business Strategy',
              speakers: ['Susan Lee', 'Robert Taylor'],
              description: 'Best practices for IP budget allocation and cost management in corporate environments.'
            }
          ]
        }
      ]
    },
    {
      id: 'workshops',
      title: 'Specialized Workshops',
      description: 'Hands-on training and skill-building sessions',
      days: [
        {
          date: 'Sunday, March 17, 2025',
          sessions: [
            {
              time: '9:00 AM - 12:00 PM',
              title: 'Advanced Trademark Search Techniques',
              location: 'Computer Lab A',
              track: 'Skills Development',
              speakers: ['Dr. Emily Carter', 'Paul Johnson'],
              description: 'Intensive workshop on advanced search methodologies and tools for trademark clearance.'
            },
            {
              time: '1:00 PM - 4:00 PM',
              title: 'IP Valuation Workshop',
              location: 'Conference Room B',
              track: 'Valuation',
              speakers: ['Mark Stevens', 'Linda Chang'],
              description: 'Practical approaches to intellectual property valuation for licensing and M&A transactions.'
            }
          ]
        }
      ]
    }
  ];

  const tracks = [
    { value: 'all', label: 'All Tracks' },
    { value: 'AI Innovation', label: 'AI Innovation' },
    { value: 'Brand Protection', label: 'Brand Protection' },
    { value: 'Digital Innovation', label: 'Digital Innovation' },
    { value: 'Career Development', label: 'Career Development' },
    { value: 'Portfolio Management', label: 'Portfolio Management' }
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
