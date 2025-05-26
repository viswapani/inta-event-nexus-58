
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../services/api';

interface BookmarkAlarm {
  id: string;
  minutes: number; // minutes before session start
  enabled: boolean;
}

interface SessionBookmark {
  id: string;
  eventId: string;
  sessionId: string;
  sessionTitle: string;
  sessionTime: string;
  sessionDate: string;
  location: string;
  track: string;
  alarms: BookmarkAlarm[];
  createdAt: Date;
}

// Mock API calls
const fetchBookmarks = async (eventId: string): Promise<SessionBookmark[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Fetching bookmarks for event:', eventId);
  
  // Return mock bookmarks from localStorage for now
  const stored = localStorage.getItem(`bookmarks_${eventId}`);
  return stored ? JSON.parse(stored) : [];
};

const addBookmark = async (eventId: string, bookmarkData: Omit<SessionBookmark, 'id' | 'eventId' | 'createdAt'>): Promise<SessionBookmark> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  console.log('Adding bookmark for event:', eventId, bookmarkData);
  
  const bookmark: SessionBookmark = {
    ...bookmarkData,
    id: Date.now().toString(),
    eventId,
    createdAt: new Date(),
  };
  
  // Store in localStorage for now
  const stored = localStorage.getItem(`bookmarks_${eventId}`);
  const bookmarks = stored ? JSON.parse(stored) : [];
  bookmarks.push(bookmark);
  localStorage.setItem(`bookmarks_${eventId}`, JSON.stringify(bookmarks));
  
  return bookmark;
};

const removeBookmark = async (eventId: string, bookmarkId: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  console.log('Removing bookmark for event:', eventId, 'bookmark:', bookmarkId);
  
  const stored = localStorage.getItem(`bookmarks_${eventId}`);
  if (stored) {
    const bookmarks = JSON.parse(stored);
    const filtered = bookmarks.filter((b: SessionBookmark) => b.id !== bookmarkId);
    localStorage.setItem(`bookmarks_${eventId}`, JSON.stringify(filtered));
  }
};

const updateBookmarkAlarms = async (eventId: string, bookmarkId: string, alarms: BookmarkAlarm[]): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  console.log('Updating alarms for bookmark:', bookmarkId, alarms);
  
  const stored = localStorage.getItem(`bookmarks_${eventId}`);
  if (stored) {
    const bookmarks = JSON.parse(stored);
    const updated = bookmarks.map((b: SessionBookmark) => 
      b.id === bookmarkId ? { ...b, alarms } : b
    );
    localStorage.setItem(`bookmarks_${eventId}`, JSON.stringify(updated));
  }
};

export const useBookmarks = (eventId: string) => {
  return useQuery({
    queryKey: ['bookmarks', eventId],
    queryFn: () => fetchBookmarks(eventId),
    staleTime: 5 * 60 * 1000,
    enabled: !!eventId,
  });
};

export const useAddBookmark = (eventId: string) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (bookmarkData: Omit<SessionBookmark, 'id' | 'eventId' | 'createdAt'>) => 
      addBookmark(eventId, bookmarkData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks', eventId] });
    },
  });
};

export const useRemoveBookmark = (eventId: string) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (bookmarkId: string) => removeBookmark(eventId, bookmarkId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks', eventId] });
    },
  });
};

export const useUpdateBookmarkAlarms = (eventId: string) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ bookmarkId, alarms }: { bookmarkId: string; alarms: BookmarkAlarm[] }) => 
      updateBookmarkAlarms(eventId, bookmarkId, alarms),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks', eventId] });
    },
  });
};

export const useBookmarkStatus = (eventId: string, sessionId: string) => {
  const { data: bookmarks = [] } = useBookmarks(eventId);
  return {
    isBookmarked: bookmarks.some(bookmark => bookmark.sessionId === sessionId),
    bookmark: bookmarks.find(bookmark => bookmark.sessionId === sessionId),
  };
};
