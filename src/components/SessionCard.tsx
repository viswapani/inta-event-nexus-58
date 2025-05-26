
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';

interface SessionCardProps {
  session: {
    time: string;
    title: string;
    location: string;
    track: string;
    speakers: string[];
    description: string;
  };
  showProgram?: boolean;
  programTitle?: string;
}

const SessionCard = ({ session, showProgram = false, programTitle }: SessionCardProps) => {
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
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
            {showProgram && programTitle && (
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 text-sm">
                {programTitle}
              </Badge>
            )}
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
  );
};

export default SessionCard;
