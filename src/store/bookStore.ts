// src/store/bookStore.ts

import { create } from 'zustand';
import { Book, SearchFilters } from '@/types/book.types';
import { apiService } from '@/services/api.service';

interface BookState {
  // Data
  books: Book[];
  currentPage: number;
  hasMore: boolean;
  totalCount: number;

  // Filters
  filters: SearchFilters;

  // Loading states
  isLoading: boolean;
  isLoadingMore: boolean;
  error: string | null;

  // Actions
  fetchBooks: (reset?: boolean) => Promise<void>;
  setFilters: (filters: Partial<SearchFilters>) => void;
  resetFilters: () => void;
  loadMore: () => Promise<void>;
  reset: () => void;
}

const initialState = {
  books: [],
  currentPage: 1,
  hasMore: true,
  totalCount: 0,
  filters: {},
  isLoading: false,
  isLoadingMore: false,
  error: null,
};

export const useBookStore = create<BookState>((set, get) => ({
  ...initialState,

  fetchBooks: async (reset = false) => {
    const state = get();
    
    // Prevent duplicate requests
    if (state.isLoading || state.isLoadingMore) return;

    set({ 
      isLoading: reset, 
      isLoadingMore: !reset,
      error: null 
    });

    try {
      const page = reset ? 1 : state.currentPage;
      const response = await apiService.fetchBooks(page, state.filters);

      set({
        books: reset ? response.results : [...state.books, ...response.results],
        currentPage: page,
        hasMore: !!response.next,
        totalCount: response.count,
        isLoading: false,
        isLoadingMore: false,
      });
    } catch (error) {
      set({
        error: 'Failed to fetch books. Please try again.',
        isLoading: false,
        isLoadingMore: false,
      });
    }
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
      currentPage: 1,
      books: [],
    }));
    // Automatically fetch with new filters
    get().fetchBooks(true);
  },

  resetFilters: () => {
    set({ filters: {}, currentPage: 1, books: [] });
    get().fetchBooks(true);
  },

  loadMore: async () => {
    const state = get();
    if (!state.hasMore || state.isLoadingMore || state.isLoading) return;

    set({ currentPage: state.currentPage + 1 });
    await get().fetchBooks(false);
  },

  reset: () => {
    set(initialState);
  },
}));
