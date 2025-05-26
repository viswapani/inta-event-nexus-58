import { useQuery, useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../services/api';

interface Session {
  time: string;
  title: string;
  location: string;
  track: string;
  speakers: string[];
  description: string;
}

interface AgendaDay {
  date: string;
  sessions: Session[];
}

interface AgendaProgram {
  title: string;
  days: AgendaDay[];
}

interface PersonalAgendaItem {
  sessionId: string;
  sessionTitle: string;
  time: string;
  date: string;
}

// Mock API calls
const fetchAgendaPrograms = async (eventId: string): Promise<AgendaProgram[]> => {
  await new Promise(resolve => setTimeout(resolve, 700));
  
  console.log('Fetching agenda programs for event:', eventId);
  
  return [
    {
      title: "Main Conference",
      days: [
        {
          date: "March 15, 2028",
          sessions: [
            {
              time: "09:00 - 09:45",
              title: "Opening Keynote: The Future of IP",
              location: "Main Auditorium",
              track: "Keynote",
              speakers: ["Dr. Sarah Chen"],
              description: "Exploring the intersection of AI and intellectual property law."
            }
          ]
        }
      ]
    }
  ];
};

const addToPersonalAgenda = async (eventId: string, sessionData: { sessionId: string; sessionTitle: string; time: string; date: string }): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Added to personal agenda for event:', eventId, sessionData);
};

const removeFromPersonalAgenda = async (eventId: string, sessionId: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Removed from personal agenda for event:', eventId, 'session:', sessionId);
};

const fetchPersonalAgenda = async (eventId: string): Promise<PersonalAgendaItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  console.log('Fetching personal agenda for event:', eventId);
  return [];
};

export const useAgendaPrograms = (eventId: string) => {
  return useQuery({
    queryKey: ['agendaPrograms', eventId],
    queryFn: () => fetchAgendaPrograms(eventId),
    staleTime: 15 * 60 * 1000,
    enabled: !!eventId,
  });
};

export const usePersonalAgenda = (eventId: string) => {
  return useQuery({
    queryKey: ['personalAgenda', eventId],
    queryFn: () => fetchPersonalAgenda(eventId),
    staleTime: 5 * 60 * 1000,
    enabled: !!eventId,
  });
};

export const useAddToAgenda = (eventId: string) => {
  return useMutation({
    mutationFn: (sessionData: { sessionId: string; sessionTitle: string; time: string; date: string }) => 
      addToPersonalAgenda(eventId, sessionData),
  });
};

export const useRemoveFromAgenda = (eventId: string) => {
  return useMutation({
    mutationFn: (sessionId: string) => removeFromPersonalAgenda(eventId, sessionId),
  });
};
