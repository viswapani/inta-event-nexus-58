
import { useQuery } from '@tanstack/react-query';

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
const fetchHeroData = async (): Promise<HeroData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
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

export const useHeroData = () => {
  return useQuery({
    queryKey: ['heroData'],
    queryFn: fetchHeroData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
