
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../services/api';
import { securityUtils } from '../lib/security';

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

// Mock API calls with secure storage
const fetchBookmarks = async (eventId: string): Promise<SessionBookmark[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Fetching bookmarks for event:', eventId);
  
  // Use secure storage
  return securityUtils.secureStorage.getItem(`bookmarks_${eventId}`, []);
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
  
  // Use secure storage
  const bookmarks = securityUtils.secureStorage.getItem(`bookmarks_${eventId}`, []);
  bookmarks.push(bookmark);
  securityUtils.secureStorage.setItem(`bookmarks_${eventId}`, bookmarks);
  
  return bookmark;
};

const removeBookmark = async (eventId: string, bookmarkId: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  console.log('Removing bookmark for event:', eventId, 'bookmark:', bookmarkId);
  
  const bookmarks = securityUtils.secureStorage.getItem(`bookmarks_${eventId}`, []);
  const filtered = bookmarks.filter((b: SessionBookmark) => b.id !== bookmarkId);
  securityUtils.secureStorage.setItem(`bookmarks_${eventId}`, filtered);
};

const updateBookmarkAlarms = async (eventId: string, bookmarkId: string, alarms: BookmarkAlarm[]): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  console.log('Updating alarms for bookmark:', bookmarkId, alarms);
  
  const bookmarks = securityUtils.secureStorage.getItem(`bookmarks_${eventId}`, []);
  const updated = bookmarks.map((b: SessionBookmark) => 
    b.id === bookmarkId ? { ...b, alarms } : b
  );
  securityUtils.secureStorage.setItem(`bookmarks_${eventId}`, updated);
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
