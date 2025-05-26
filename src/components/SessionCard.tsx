
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Users, Calendar, bookmark, alarm-clock } from 'lucide-react';
import { useBookmarkStatus, useAddBookmark, useRemoveBookmark, useUpdateBookmarkAlarms } from '@/hooks/useBookmarks';
import AlarmDialog from './AlarmDialog';

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
  eventId?: string;
  sessionId?: string;
  sessionDate?: string;
}

const SessionCard = ({ 
  session, 
  showProgram = false, 
  programTitle,
  eventId = 'event-2028',
  sessionId = `session-${session.title.replace(/\s+/g, '-').toLowerCase()}`,
  sessionDate = 'March 15, 2028'
}: SessionCardProps) => {
  const { isBookmarked, bookmark } = useBookmarkStatus(eventId, sessionId);
  const addBookmarkMutation = useAddBookmark(eventId);
  const removeBookmarkMutation = useRemoveBookmark(eventId);
  const updateAlarmsMutation = useUpdateBookmarkAlarms(eventId);

  const handleBookmarkToggle = () => {
    if (isBookmarked && bookmark) {
      removeBookmarkMutation.mutate(bookmark.id);
    } else {
      addBookmarkMutation.mutate({
        sessionId,
        sessionTitle: session.title,
        sessionTime: session.time,
        sessionDate,
        location: session.location,
        track: session.track,
        alarms: [],
      });
    }
  };

  const handleAlarmsUpdate = (alarms: any[]) => {
    if (bookmark) {
      updateAlarmsMutation.mutate({
        bookmarkId: bookmark.id,
        alarms,
      });
    }
  };

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
            {isBookmarked && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 px-3 py-1 text-sm">
                <bookmark className="w-3 h-3 mr-1" />
                Bookmarked
              </Badge>
            )}
            {bookmark && bookmark.alarms.some(alarm => alarm.enabled) && (
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-3 py-1 text-sm">
                <alarm-clock className="w-3 h-3 mr-1" />
                {bookmark.alarms.filter(alarm => alarm.enabled).length} Alarm{bookmark.alarms.filter(alarm => alarm.enabled).length !== 1 ? 's' : ''}
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
            <Button 
              size="sm" 
              variant={isBookmarked ? "secondary" : "outline"}
              onClick={handleBookmarkToggle}
              disabled={addBookmarkMutation.isPending || removeBookmarkMutation.isPending}
              className={isBookmarked ? "bg-green-100 text-green-700 hover:bg-green-200" : "border-inta-gray text-inta-gray hover:bg-inta-gray hover:text-white"}
            >
              <bookmark className="w-4 h-4 mr-2" />
              {isBookmarked ? 'Bookmarked' : 'Bookmark'}
            </Button>
            
            {isBookmarked && bookmark && (
              <AlarmDialog
                sessionTitle={session.title}
                sessionTime={session.time}
                alarms={bookmark.alarms}
                onAlarmsUpdate={handleAlarmsUpdate}
                trigger={
                  <Button size="sm" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                    <alarm-clock className="w-4 h-4 mr-2" />
                    Alarms ({bookmark.alarms.filter(alarm => alarm.enabled).length})
                  </Button>
                }
              />
            )}

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
