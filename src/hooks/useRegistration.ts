import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../services/api';

interface RegistrationPlan {
  name: string;
  price: string;
  originalPrice?: string;
  savings?: string;
  deadline: string;
  popular: boolean;
  features: string[];
}

interface RegistrationStats {
  registered: string;
  daysLeft: string;
  earlyBirdSpots: string;
}

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  plan: string;
  additionalInfo?: string;
}

// Mock API calls
const fetchRegistrationPlans = async (eventId: string): Promise<RegistrationPlan[]> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  
  console.log('Fetching registration plans for event:', eventId);
  
  return [
    {
      name: 'Early Bird',
      price: '$299',
      originalPrice: '$399',
      savings: 'Save $100',
      deadline: 'Until Feb 15, 2028',
      popular: true,
      features: [
        'Access to all sessions and workshops',
        'Welcome reception and networking events',
        'Event materials and swag bag',
        'Mobile app access',
        'Session recordings (30 days)',
        'Lunch included (3 days)',
        'AI assistant access'
      ]
    }
  ];
};

const fetchRegistrationStats = async (eventId: string): Promise<RegistrationStats> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  console.log('Fetching registration stats for event:', eventId);
  
  return {
    registered: '1,847',
    daysLeft: '89',
    earlyBirdSpots: '153'
  };
};

const submitRegistration = async (eventId: string, data: RegistrationData): Promise<{ success: boolean; registrationId: string }> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log('Registration submitted for event:', eventId, data);
  
  return {
    success: true,
    registrationId: `REG-${eventId}-${Date.now()}`
  };
};

const requestGroupDiscount = async (eventId: string, data: { attendeeCount: number; contactInfo: any }): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Group discount requested for event:', eventId, data);
};

export const useRegistrationPlans = (eventId: string) => {
  return useQuery({
    queryKey: ['registrationPlans', eventId],
    queryFn: () => fetchRegistrationPlans(eventId),
    staleTime: 30 * 60 * 1000, // 30 minutes
    enabled: !!eventId,
  });
};

export const useRegistrationStats = (eventId: string) => {
  return useQuery({
    queryKey: ['registrationStats', eventId],
    queryFn: () => fetchRegistrationStats(eventId),
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    enabled: !!eventId,
  });
};

export const useSubmitRegistration = (eventId: string) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: RegistrationData) => submitRegistration(eventId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['registrationStats', eventId] });
    },
  });
};

export const useGroupDiscountRequest = (eventId: string) => {
  return useMutation({
    mutationFn: (data: { attendeeCount: number; contactInfo: any }) => requestGroupDiscount(eventId, data),
  });
};
