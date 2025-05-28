
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

  // Get dates from URL parameters
  const getEventDatesFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const startDate = urlParams.get('startDate');
    const endDate = urlParams.get('endDate');
    
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      // Generate dates between start and end
      const dates = [];
      const currentDate = new Date(start);
      
      while (currentDate <= end) {
        dates.push(new Date(currentDate).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      
      return {
        dates,
        hasUrlDates: true
      };
    }

    // Default dates
    return {
      dates: [
        'Wednesday, May 28, 2025',
        'Thursday, May 29, 2025',
        'Friday, May 30, 2025'
      ],
      hasUrlDates: false
    };
  };

  const eventDates = getEventDatesFromURL();
  
  const programs = [
    {
      id: 'main-conference',
      title: 'Main Conference Program',
      description: 'Core sessions, keynotes, and networking events',
      days: [
        {
          date: eventDates.dates[0] || 'Wednesday, May 28, 2025',
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
          date: eventDates.dates[1] || 'Thursday, May 29, 2025',
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
          date: eventDates.dates[0] || 'Wednesday, May 28, 2025',
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
          date: eventDates.dates[1] || 'Thursday, May 29, 2025',
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
          date: eventDates.dates[2] || 'Friday, May 30, 2025',
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
    <section id="agenda" className="py-8 bg-gradient-to-br from-inta-light to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-inta-navy mb-3">Today's Agenda</h2>
          <p className="text-lg text-inta-gray max-w-2xl mx-auto">
            Join us for three days of comprehensive programming designed for IP professionals.
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
        <Tabs defaultValue="programs" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-inta-orange to-inta-orange-light shadow-lg h-12 p-1">
            <TabsTrigger 
              value="programs" 
              className="text-lg font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-inta-navy data-[state=active]:shadow-md data-[state=inactive]:text-white data-[state=inactive]:bg-transparent hover:bg-white/20"
            >
              View by Programs
            </TabsTrigger>
            <TabsTrigger 
              value="dates" 
              className="text-lg font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-inta-navy data-[state=active]:shadow-md data-[state=inactive]:text-white data-[state=inactive]:bg-transparent hover:bg-white/20"
            >
              View by Date
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="programs">
            <div className="agenda-view">
              <ProgramAccordion programs={filteredPrograms} />
            </div>
          </TabsContent>
          
          <TabsContent value="dates">
            <div className="agenda-view">
              <DateWiseAgenda 
                programs={programs}
                searchTerm={searchTerm}
                selectedTrack={selectedTrack}
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Information - Compact */}
        <div className="mt-8 bg-gradient-to-r from-inta-navy to-inta-blue rounded-lg p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-3">Stay Connected</h3>
          <p className="text-base mb-4">
            Download our mobile app for real-time updates and networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-white text-inta-navy hover:bg-gray-100 font-semibold">
              <Smartphone className="w-4 h-4 mr-2" />
              iOS App Store
            </Button>
            <Button className="bg-white text-inta-navy hover:bg-gray-100 font-semibold">
              <Smartphone className="w-4 h-4 mr-2" />
              Google Play Store
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .agenda-view .view-details-btn {
          background-color: #f97316 !important;
          color: white !important;
        }
        .agenda-view .view-details-btn:hover {
          background-color: #ea580c !important;
        }
        .agenda-view button[class*="view-details"], 
        .agenda-view button:contains("Session Details") {
          background-color: #f97316 !important;
          color: white !important;
        }
        .agenda-view button[class*="view-details"]:hover,
        .agenda-view button:contains("Session Details"):hover {
          background-color: #ea580c !important;
        }
      `}</style>
    </section>
  );
};

export default AgendaSection;
