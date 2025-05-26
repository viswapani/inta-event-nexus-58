import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';
import DateWiseAgenda from './DateWiseAgenda';
import ProgramAccordion from './ProgramAccordion';
import AgendaFilters from './AgendaFilters';
import AgendaResourcesSection from './AgendaResourcesSection';

const AgendaSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');

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

        <AgendaResourcesSection />

        <AgendaFilters 
          searchTerm={searchTerm}
          selectedTrack={selectedTrack}
          onSearchChange={setSearchTerm}
          onTrackChange={setSelectedTrack}
        />

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
            <ProgramAccordion programs={filteredPrograms} />
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
