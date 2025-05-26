
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';

interface Session {
  time: string;
  title: string;
  location: string;
  track: string;
  speakers: string[];
  description: string;
  program: string;
}

interface DateWiseAgendaProps {
  programs: any[];
  searchTerm: string;
  selectedTrack: string;
}

const DateWiseAgenda = ({ programs, searchTerm, selectedTrack }: DateWiseAgendaProps) => {
  // Organize sessions by date across all programs
  const sessionsByDate: { [key: string]: Session[] } = {};

  programs.forEach(program => {
    program.days.forEach((day: any) => {
      if (!sessionsByDate[day.date]) {
        sessionsByDate[day.date] = [];
      }
      day.sessions.forEach((session: any) => {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = session.title.toLowerCase().includes(searchLower) ||
                             session.speakers.some((speaker: string) => speaker.toLowerCase().includes(searchLower)) ||
                             session.track.toLowerCase().includes(searchLower) ||
                             session.location.toLowerCase().includes(searchLower);
        const matchesTrack = selectedTrack === 'all' || session.track === selectedTrack;
        
        if (matchesSearch && matchesTrack) {
          sessionsByDate[day.date].push({
            ...session,
            program: program.title
          });
        }
      });
    });
  });

  // Sort sessions by time within each date
  Object.keys(sessionsByDate).forEach(date => {
    sessionsByDate[date].sort((a, b) => {
      const timeA = a.time.split(' - ')[0];
      const timeB = b.time.split(' - ')[0];
      return timeA.localeCompare(timeB);
    });
  });

  const sortedDates = Object.keys(sessionsByDate).sort();

  return (
    <div className="space-y-8">
      {sortedDates.map((date) => (
        <Card key={date} className="shadow-lg border border-gray-200">
          <CardHeader className="bg-inta-navy text-white">
            <CardTitle className="text-2xl flex items-center">
              <Calendar className="w-6 h-6 mr-3" />
              {date}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {sessionsByDate[date].map((session, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <Badge className="bg-inta-blue text-white px-3 py-1 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {session.time}
                        </Badge>
                        <Badge variant="outline" className="border-inta-accent text-inta-accent px-3 py-1 text-sm">
                          {session.track}
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 text-sm">
                          {session.program}
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DateWiseAgenda;
