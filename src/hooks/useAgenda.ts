
import { useQuery, useMutation } from '@tanstack/react-query';

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
const fetchAgendaPrograms = async (): Promise<AgendaProgram[]> => {
  await new Promise(resolve => setTimeout(resolve, 700));
  
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

const addToPersonalAgenda = async (sessionData: { sessionId: string; sessionTitle: string; time: string; date: string }): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Added to personal agenda:', sessionData);
};

const removeFromPersonalAgenda = async (sessionId: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Removed from personal agenda:', sessionId);
};

const fetchPersonalAgenda = async (): Promise<PersonalAgendaItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return [];
};

export const useAgendaPrograms = () => {
  return useQuery({
    queryKey: ['agendaPrograms'],
    queryFn: fetchAgendaPrograms,
    staleTime: 15 * 60 * 1000,
  });
};

export const usePersonalAgenda = () => {
  return useQuery({
    queryKey: ['personalAgenda'],
    queryFn: fetchPersonalAgenda,
    staleTime: 5 * 60 * 1000,
  });
};

export const useAddToAgenda = () => {
  return useMutation({
    mutationFn: addToPersonalAgenda,
  });
};

export const useRemoveFromAgenda = () => {
  return useMutation({
    mutationFn: removeFromPersonalAgenda,
  });
};
