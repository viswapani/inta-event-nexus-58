
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

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
const fetchRegistrationPlans = async (): Promise<RegistrationPlan[]> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  
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

const fetchRegistrationStats = async (): Promise<RegistrationStats> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    registered: '1,847',
    daysLeft: '89',
    earlyBirdSpots: '153'
  };
};

const submitRegistration = async (data: RegistrationData): Promise<{ success: boolean; registrationId: string }> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log('Registration submitted:', data);
  
  return {
    success: true,
    registrationId: `REG-${Date.now()}`
  };
};

const requestGroupDiscount = async (data: { attendeeCount: number; contactInfo: any }): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Group discount requested:', data);
};

export const useRegistrationPlans = () => {
  return useQuery({
    queryKey: ['registrationPlans'],
    queryFn: fetchRegistrationPlans,
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useRegistrationStats = () => {
  return useQuery({
    queryKey: ['registrationStats'],
    queryFn: fetchRegistrationStats,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
};

export const useSubmitRegistration = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: submitRegistration,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['registrationStats'] });
    },
  });
};

export const useGroupDiscountRequest = () => {
  return useMutation({
    mutationFn: requestGroupDiscount,
  });
};
