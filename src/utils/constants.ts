import { Genre } from '@/types/book.types';


export const GENRES: Genre[] = [
  {
    id: 'fiction',
    label: 'FICTION',
    icon: '/Icons/Fiction.svg',
    topic: 'fiction',
  },
  {
    id: 'drama',
    label: 'DRAMA',
    icon: '/Icons/Drama.svg',
    topic: 'drama',
  },
  {
    id: 'humor',
    label: 'HUMOR',
    icon: '/Icons/Humor.svg',
    topic: 'humor',
  },
  {
    id: 'politics',
    label: 'POLITICS',
    icon: '/Icons/Politics.svg',
    topic: 'politics',
  },
  {
    id: 'philosophy',
    label: 'PHILOSOPHY',
    icon: '/Icons/Philosophy.svg',
    topic: 'philosophy',
  },
  {
    id: 'history',
    label: 'HISTORY',
    icon: '/Icons/History.svg',
    topic: 'history',
  },
  {
    id: 'adventure',
    label: 'ADVENTURE',
    icon: '/Icons/Adventure.svg',
    topic: 'adventure',
  },
];

export const DEBOUNCE_DELAY = 300;
export const BOOKS_PER_PAGE = 32;