
// Centralized API configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-domain.com/api' 
  : 'http://localhost:3001/api';

// API endpoints configuration
export const API_ENDPOINTS = {
  // Hero section
  HERO_DATA: `${API_BASE_URL}/hero`,
  
  // Speakers
  SPEAKERS: `${API_BASE_URL}/speakers`,
  FAVORITE_SPEAKER: (id: number) => `${API_BASE_URL}/speakers/${id}/favorite`,
  
  // Sponsors and Media
  SPONSORS: `${API_BASE_URL}/sponsors`,
  MEDIA_GALLERY: `${API_BASE_URL}/media`,
  SPONSORSHIP_INQUIRY: `${API_BASE_URL}/sponsorship/inquiry`,
  MEDIA_UPLOAD: `${API_BASE_URL}/media/upload`,
  
  // Registration
  REGISTRATION_PLANS: `${API_BASE_URL}/registration/plans`,
  REGISTRATION_STATS: `${API_BASE_URL}/registration/stats`,
  SUBMIT_REGISTRATION: `${API_BASE_URL}/registration/submit`,
  GROUP_DISCOUNT: `${API_BASE_URL}/registration/group-discount`,
  
  // Agenda
  AGENDA_PROGRAMS: `${API_BASE_URL}/agenda/programs`,
  PERSONAL_AGENDA: `${API_BASE_URL}/agenda/personal`,
  ADD_TO_AGENDA: `${API_BASE_URL}/agenda/add`,
  REMOVE_FROM_AGENDA: (sessionId: string) => `${API_BASE_URL}/agenda/remove/${sessionId}`,
  
  // Chatbot
  CHAT: `${API_BASE_URL}/chat`,
  
  // Common
  NEWSLETTER_SIGNUP: `${API_BASE_URL}/newsletter/signup`,
  CONTACT_FORM: `${API_BASE_URL}/contact`,
};

// Common headers for API requests
export const getApiHeaders = () => ({
  'Content-Type': 'application/json',
  // Add authentication headers here when needed
  // 'Authorization': `Bearer ${getAuthToken()}`,
});

// Error handling utility
export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  
  if (error.response) {
    // Server responded with error status
    throw new Error(error.response.data?.message || 'An error occurred');
  } else if (error.request) {
    // Request was made but no response
    throw new Error('Network error - please check your connection');
  } else {
    // Something else happened
    throw new Error('An unexpected error occurred');
  }
};

// Generic fetch wrapper
export const apiRequest = async <T>(
  url: string, 
  options: RequestInit = {}
): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: getApiHeaders(),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
