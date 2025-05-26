
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Calendar, MapPin, Clock, AlarmClock } from 'lucide-react';
import { useBookmarks } from '@/hooks/useBookmarks';
import SessionCard from './SessionCard';

interface FavoritesProps {
  eventId?: string;
}

const Favorites = ({ eventId = 'event-2028' }: FavoritesProps) => {
  const { data: bookmarks = [], isLoading, error } = useBookmarks(eventId);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading your favorites...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">Error loading favorites</div>
      </div>
    );
  }

  if (bookmarks.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="shadow-lg border border-gray-200">
          <CardHeader className="bg-inta-navy text-white">
            <CardTitle className="text-2xl flex items-center">
              <Heart className="w-6 h-6 mr-3" />
              My Favorites
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <div className="text-gray-500">
              <Heart className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
              <p>Start bookmarking sessions you're interested in to see them here!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="shadow-lg border border-gray-200">
        <CardHeader className="bg-inta-navy text-white">
          <CardTitle className="text-2xl flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="w-6 h-6 mr-3" />
              My Favorites
            </div>
            <Badge variant="secondary" className="bg-white text-inta-navy">
              {bookmarks.length} session{bookmarks.length !== 1 ? 's' : ''}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {bookmarks.map((bookmark) => (
              <div key={bookmark.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <Badge className="bg-inta-blue text-white px-3 py-1 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {bookmark.sessionTime}
                      </Badge>
                      <Badge variant="outline" className="border-inta-accent text-inta-accent px-3 py-1 text-sm">
                        {bookmark.track}
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 text-sm">
                        {bookmark.sessionDate}
                      </Badge>
                      {bookmark.alarms.some(alarm => alarm.enabled) && (
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-3 py-1 text-sm">
                          <AlarmClock className="w-3 h-3 mr-1" />
                          {bookmark.alarms.filter(alarm => alarm.enabled).length} Alarm{bookmark.alarms.filter(alarm => alarm.enabled).length !== 1 ? 's' : ''}
                        </Badge>
                      )}
                    </div>
                    
                    <h5 className="text-xl font-semibold text-inta-navy mb-3">{bookmark.sessionTitle}</h5>
                    
                    <div className="flex items-center text-inta-gray mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="font-medium">{bookmark.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Favorites;
