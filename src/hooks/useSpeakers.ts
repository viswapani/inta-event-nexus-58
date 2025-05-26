
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  track: string;
  bio: string;
  image: string;
  initials: string;
  sessions: string[];
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

interface SpeakerFilters {
  searchTerm?: string;
  track?: string;
}

// Mock API calls - replace with actual API endpoints
const fetchSpeakers = async (filters: SpeakerFilters = {}): Promise<Speaker[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // This would normally come from your API
  const allSpeakers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Chief Innovation Officer',
      company: 'TechLegal Innovations',
      track: 'AI Innovation',
      bio: 'Leading expert in AI applications for legal technology with 15+ years of experience in intellectual property law.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face',
      initials: 'SC',
      sessions: ['AI and the Future of Trademark Law', 'Machine Learning in IP Analysis'],
      social: { linkedin: '#', twitter: '#' }
    },
    // Add more speakers as needed
  ];

  // Apply filters
  let filtered = allSpeakers;
  
  if (filters.searchTerm) {
    const search = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(speaker =>
      speaker.name.toLowerCase().includes(search) ||
      speaker.company.toLowerCase().includes(search) ||
      speaker.title.toLowerCase().includes(search)
    );
  }
  
  if (filters.track && filters.track !== 'all') {
    filtered = filtered.filter(speaker => speaker.track === filters.track);
  }
  
  return filtered;
};

const favoriteSpeaker = async (speakerId: number): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Speaker favorited:', speakerId);
};

export const useSpeakers = (filters: SpeakerFilters = {}) => {
  return useQuery({
    queryKey: ['speakers', filters],
    queryFn: () => fetchSpeakers(filters),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useFavoriteSpeaker = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: favoriteSpeaker,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['speakers'] });
    },
  });
};
