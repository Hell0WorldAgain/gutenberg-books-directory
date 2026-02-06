// src/utils/constants.ts

import { Genre } from '@/types/book.types';

export const GENRES: Genre[] = [
  {
    id: 'fiction',
    label: 'FICTION',
    icon: '📚',
    topic: 'fiction',
    description: 'Imaginative narratives and stories',
  },
  {
    id: 'drama',
    label: 'DRAMA',
    icon: '🎭',
    topic: 'drama',
    description: 'Theatrical works and plays',
  },
  {
    id: 'humor',
    label: 'HUMOR',
    icon: '😄',
    topic: 'humor',
    description: 'Comedy and satirical works',
  },
  {
    id: 'politics',
    label: 'POLITICS',
    icon: '⚖️',
    topic: 'politics',
    description: 'Political theory and governance',
  },
  {
    id: 'philosophy',
    label: 'PHILOSOPHY',
    icon: '🤔',
    topic: 'philosophy',
    description: 'Philosophical thought and wisdom',
  },
  {
    id: 'history',
    label: 'HISTORY',
    icon: '📜',
    topic: 'history',
    description: 'Historical accounts and records',
  },
  {
    id: 'adventure',
    label: 'ADVENTURE',
    icon: '🗺️',
    topic: 'adventure',
    description: 'Tales of exploration and daring',
  },
];

export const DEBOUNCE_DELAY = 500; // milliseconds
export const BOOKS_PER_PAGE = 32; // API default
export const VIRTUAL_LIST_ITEM_SIZE = 320; // pixels
export const VIRTUAL_LIST_OVERSCAN_COUNT = 5;
