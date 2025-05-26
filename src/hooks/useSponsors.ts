
import { useQuery, useMutation } from '@tanstack/react-query';

interface Sponsor {
  name: string;
  logo: string;
  description: string;
  website?: string;
}

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  thumbnail: string;
  date: string;
  url?: string;
}

interface SponsorsData {
  platinum: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
}

// Mock API calls
const fetchSponsors = async (): Promise<SponsorsData> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return {
    platinum: [
      { 
        name: 'TechLegal Corp', 
        logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop', 
        description: 'Leading AI solutions for legal professionals',
        website: 'https://example.com'
      },
      { 
        name: 'Global IP Solutions', 
        logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=100&fit=crop', 
        description: 'Worldwide trademark protection services',
        website: 'https://example.com'
      }
    ],
    gold: [
      { 
        name: 'Innovation Partners', 
        logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=75&fit=crop', 
        description: 'IP consulting and strategy',
        website: 'https://example.com'
      }
    ],
    silver: [
      { 
        name: 'IP Analytics', 
        logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=120&h=60&fit=crop', 
        description: 'Data-driven IP insights',
        website: 'https://example.com'
      }
    ]
  };
};

const fetchMediaGallery = async (): Promise<MediaItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    { 
      id: 1, 
      type: 'image', 
      title: 'Opening Ceremony 2027', 
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop', 
      date: 'Day 1',
      url: 'https://example.com/media/1'
    }
  ];
};

const submitSponsorshipInquiry = async (data: { name: string; email: string; company: string; message: string }): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Sponsorship inquiry submitted:', data);
};

export const useSponsors = () => {
  return useQuery({
    queryKey: ['sponsors'],
    queryFn: fetchSponsors,
    staleTime: 15 * 60 * 1000, // 15 minutes
  });
};

export const useMediaGallery = () => {
  return useQuery({
    queryKey: ['mediaGallery'],
    queryFn: fetchMediaGallery,
    staleTime: 10 * 60 * 1000,
  });
};

export const useSponsorshipInquiry = () => {
  return useMutation({
    mutationFn: submitSponsorshipInquiry,
  });
};
