// Centralized API configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-domain.com/api' 
  : 'http://localhost:3001/api';

// API endpoints configuration
export const API_ENDPOINTS = {
  // Event-specific endpoints
  EVENT_DATA: (eventId: string) => `${API_BASE_URL}/events/${eventId}`,
  HERO_DATA: (eventId: string) => `${API_BASE_URL}/events/${eventId}/hero`,
  
  // Speakers endpoints
  SPEAKERS: (eventId: string) => `${API_BASE_URL}/events/${eventId}/speakers`,
  FAVORITE_SPEAKER: (eventId: string, speakerId: number) => `${API_BASE_URL}/events/${eventId}/speakers/${speakerId}/favorite`,
  
  // Sponsors and Media endpoints
  SPONSORS: (eventId: string) => `${API_BASE_URL}/events/${eventId}/sponsors`,
  MEDIA_GALLERY: (eventId: string) => `${API_BASE_URL}/events/${eventId}/media`,
  SPONSORSHIP_INQUIRY: (eventId: string) => `${API_BASE_URL}/events/${eventId}/sponsorship/inquiry`,
  MEDIA_UPLOAD: (eventId: string) => `${API_BASE_URL}/events/${eventId}/media/upload`,
  
  // Registration endpoints
  REGISTRATION_PLANS: (eventId: string) => `${API_BASE_URL}/events/${eventId}/registration/plans`,
  REGISTRATION_STATS: (eventId: string) => `${API_BASE_URL}/events/${eventId}/registration/stats`,
  SUBMIT_REGISTRATION: (eventId: string) => `${API_BASE_URL}/events/${eventId}/registration/submit`,
  GROUP_DISCOUNT: (eventId: string) => `${API_BASE_URL}/events/${eventId}/registration/group-discount`,
  
  // Agenda endpoints
  AGENDA_PROGRAMS: (eventId: string) => `${API_BASE_URL}/events/${eventId}/agenda/programs`,
  PERSONAL_AGENDA: (eventId: string) => `${API_BASE_URL}/events/${eventId}/agenda/personal`,
  ADD_TO_AGENDA: (eventId: string) => `${API_BASE_URL}/events/${eventId}/agenda/add`,
  REMOVE_FROM_AGENDA: (eventId: string, sessionId: string) => `${API_BASE_URL}/events/${eventId}/agenda/remove/${sessionId}`,
  
  // Venue endpoints
  VENUE_INFO: (eventId: string) => `${API_BASE_URL}/events/${eventId}/venue`,
  HOTELS: (eventId: string) => `${API_BASE_URL}/events/${eventId}/hotels`,
  
  // Bookmark endpoints
  BOOKMARKS: (eventId: string) => `${API_BASE_URL}/events/${eventId}/bookmarks`,
  ADD_BOOKMARK: (eventId: string) => `${API_BASE_URL}/events/${eventId}/bookmarks/add`,
  REMOVE_BOOKMARK: (eventId: string, bookmarkId: string) => `${API_BASE_URL}/events/${eventId}/bookmarks/${bookmarkId}`,
  UPDATE_BOOKMARK_ALARMS: (eventId: string, bookmarkId: string) => `${API_BASE_URL}/events/${eventId}/bookmarks/${bookmarkId}/alarms`,
  
  // Common endpoints
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
