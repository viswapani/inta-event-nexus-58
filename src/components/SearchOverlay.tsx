
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X, Clock, MapPin, Users } from 'lucide-react';

interface SearchResult {
  type: 'session' | 'speaker' | 'location';
  title: string;
  subtitle: string;
  time?: string;
  location?: string;
  track?: string;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Mock search results - in a real app, this would fetch from an API
  const mockResults: SearchResult[] = [
    {
      type: 'session',
      title: 'AI and the Future of Trademark Law',
      subtitle: 'Opening Keynote',
      time: '9:00 AM - 10:30 AM',
      location: 'Main Auditorium',
      track: 'AI Innovation'
    },
    {
      type: 'session',
      title: 'Global Brand Protection Strategies',
      subtitle: 'Main Conference',
      time: '11:00 AM - 12:30 PM',
      location: 'Conference Room A',
      track: 'Brand Protection'
    },
    {
      type: 'speaker',
      title: 'Dr. Sarah Chen',
      subtitle: 'AI Research Director'
    },
    {
      type: 'location',
      title: 'Main Auditorium',
      subtitle: 'Level 1, West Wing'
    }
  ];

  useEffect(() => {
    if (searchTerm.length > 2) {
      const filtered = mockResults.filter(
        result =>
          result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'session': return Clock;
      case 'speaker': return Users;
      case 'location': return MapPin;
      default: return Search;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto top-4 translate-y-0 max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search Event
            </span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Input
            placeholder="Search sessions, speakers, locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            autoFocus
          />
          
          {results.length > 0 && (
            <div className="max-h-96 overflow-y-auto space-y-2">
              {results.map((result, index) => {
                const IconComponent = getResultIcon(result.type);
                return (
                  <div
                    key={index}
                    className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-gray-100"
                  >
                    <div className="flex items-start gap-3">
                      <IconComponent className="w-4 h-4 mt-1 text-inta-blue" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-inta-navy truncate">
                          {result.title}
                        </h4>
                        <p className="text-xs text-inta-gray">{result.subtitle}</p>
                        {result.time && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {result.time}
                            </Badge>
                            {result.location && (
                              <Badge variant="secondary" className="text-xs">
                                {result.location}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          {searchTerm.length > 2 && results.length === 0 && (
            <div className="text-center py-8 text-inta-gray">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No results found for "{searchTerm}"</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchOverlay;
