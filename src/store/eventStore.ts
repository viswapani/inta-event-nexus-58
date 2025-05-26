
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface EventState {
  // User preferences
  favoriteSponsors: string[];
  personalAgenda: string[];
  registrationData: any;
  
  // UI state
  selectedTrack: string;
  searchFilters: {
    speakers: string;
    agenda: string;
  };
  
  // Actions
  addFavoriteSponsor: (sponsorName: string) => void;
  removeFavoriteSponsor: (sponsorName: string) => void;
  addToPersonalAgenda: (sessionId: string) => void;
  removeFromPersonalAgenda: (sessionId: string) => void;
  setRegistrationData: (data: any) => void;
  setSelectedTrack: (track: string) => void;
  setSpeakerSearch: (search: string) => void;
  setAgendaSearch: (search: string) => void;
  clearUserData: () => void;
}

export const useEventStore = create<EventState>()(
  persist(
    (set, get) => ({
      // Initial state
      favoriteSponsors: [],
      personalAgenda: [],
      registrationData: null,
      selectedTrack: 'all',
      searchFilters: {
        speakers: '',
        agenda: '',
      },

      // Actions
      addFavoriteSponsor: (sponsorName) =>
        set((state) => ({
          favoriteSponsors: [...state.favoriteSponsors, sponsorName],
        })),

      removeFavoriteSponsor: (sponsorName) =>
        set((state) => ({
          favoriteSponsors: state.favoriteSponsors.filter(name => name !== sponsorName),
        })),

      addToPersonalAgenda: (sessionId) =>
        set((state) => ({
          personalAgenda: [...state.personalAgenda, sessionId],
        })),

      removeFromPersonalAgenda: (sessionId) =>
        set((state) => ({
          personalAgenda: state.personalAgenda.filter(id => id !== sessionId),
        })),

      setRegistrationData: (data) =>
        set(() => ({
          registrationData: data,
        })),

      setSelectedTrack: (track) =>
        set(() => ({
          selectedTrack: track,
        })),

      setSpeakerSearch: (search) =>
        set((state) => ({
          searchFilters: { ...state.searchFilters, speakers: search },
        })),

      setAgendaSearch: (search) =>
        set((state) => ({
          searchFilters: { ...state.searchFilters, agenda: search },
        })),

      clearUserData: () =>
        set(() => ({
          favoriteSponsors: [],
          personalAgenda: [],
          registrationData: null,
        })),
    }),
    {
      name: 'inta-event-storage',
      // Only persist user preferences, not UI state
      partialize: (state) => ({
        favoriteSponsors: state.favoriteSponsors,
        personalAgenda: state.personalAgenda,
        registrationData: state.registrationData,
      }),
    }
  )
);
