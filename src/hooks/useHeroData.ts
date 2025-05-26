
import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../services/api';

interface HeroData {
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  stats: {
    speakers: string;
    sessions: string;
    countries: string;
  };
}

// Mock API call - replace with actual API endpoint
const fetchHeroData = async (eventId: string): Promise<HeroData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Fetching hero data for event:', eventId);
  
  return {
    title: "INTA EVENT 2028",
    subtitle: "Global Innovation & Technology Summit",
    dates: "March 15-17, 2028",
    location: "San Francisco, CA",
    stats: {
      speakers: "150+",
      sessions: "75+",
      countries: "50+"
    }
  };
};

export const useHeroData = (eventId: string) => {
  return useQuery({
    queryKey: ['heroData', eventId],
    queryFn: () => fetchHeroData(eventId),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!eventId, // Only run query when eventId is provided
  });
};
