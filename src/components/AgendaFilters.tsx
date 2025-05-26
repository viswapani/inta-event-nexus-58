
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ExternalLink } from 'lucide-react';

interface AgendaFiltersProps {
  searchTerm: string;
  selectedTrack: string;
  onSearchChange: (value: string) => void;
  onTrackChange: (value: string) => void;
}

const AgendaFilters = ({ 
  searchTerm, 
  selectedTrack, 
  onSearchChange, 
  onTrackChange 
}: AgendaFiltersProps) => {
  const tracks = [
    { value: 'all', label: 'All Tracks' },
    { value: 'AI Innovation', label: 'AI Innovation' },
    { value: 'Brand Protection', label: 'Brand Protection' },
    { value: 'Digital Innovation', label: 'Digital Innovation' },
    { value: 'Career Development', label: 'Career Development' },
    { value: 'Portfolio Management', label: 'Portfolio Management' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-inta-gray w-5 h-5" />
          <Input
            placeholder="Search sessions, speakers..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-12 h-12 text-lg"
          />
        </div>
        <Select value={selectedTrack} onValueChange={onTrackChange}>
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
  );
};

export default AgendaFilters;
