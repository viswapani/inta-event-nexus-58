import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import SessionCard from './SessionCard';

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
                <SessionCard 
                  key={index} 
                  session={session}
                  showProgram={true}
                  programTitle={session.program}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DateWiseAgenda;
