
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.inta.org';

export interface Speaker {
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

export interface Session {
  time: string;
  title: string;
  location: string;
  track: string;
  speakers: string[];
  description: string;
  program?: string;
}

export interface Day {
  date: string;
  sessions: Session[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  days: Day[];
}

export interface Sponsor {
  name: string;
  logo: string;
  description: string;
  website?: string;
}

export interface SponsorsData {
  platinum: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
}

export interface MediaItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  thumbnail: string;
  date: string;
}

// API Functions
export const apiService = {
  // Fetch all speakers
  async getSpeakers(): Promise<Speaker[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/speakers`);
      if (!response.ok) throw new Error('Failed to fetch speakers');
      return await response.json();
    } catch (error) {
      console.error('Error fetching speakers:', error);
      return [];
    }
  },

  // Fetch all programs with agenda
  async getPrograms(): Promise<Program[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/programs`);
      if (!response.ok) throw new Error('Failed to fetch programs');
      return await response.json();
    } catch (error) {
      console.error('Error fetching programs:', error);
      return [];
    }
  },

  // Fetch sponsors data
  async getSponsors(): Promise<SponsorsData> {
    try {
      const response = await fetch(`${API_BASE_URL}/sponsors`);
      if (!response.ok) throw new Error('Failed to fetch sponsors');
      return await response.json();
    } catch (error) {
      console.error('Error fetching sponsors:', error);
      return { platinum: [], gold: [], silver: [] };
    }
  },

  // Fetch media gallery
  async getMediaGallery(): Promise<MediaItem[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/media`);
      if (!response.ok) throw new Error('Failed to fetch media');
      return await response.json();
    } catch (error) {
      console.error('Error fetching media:', error);
      return [];
    }
  }
};
