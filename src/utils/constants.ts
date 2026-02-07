import { Genre } from '@/types/book.types';


export const GENRES: Genre[] = [
  {
    id: 'fiction',
    label: 'FICTION',
    icon: '/Icons/Fiction.svg',
    topic: 'fiction',
    arrow: '/Icons/Next.svg',
  },
  {
    id: 'philosophy',
    label: 'PHILOSOPHY',
    icon: '/Icons/Philosophy.svg',
    topic: 'philosophy',
    arrow: '/Icons/Next.svg',
  },
  {
    id: 'drama',
    label: 'DRAMA',
    icon: '/Icons/Drama.svg',
    topic: 'drama',
    arrow: '/Icons/Next.svg',
  },
  {
    id: 'history',
    label: 'HISTORY',
    icon: '/Icons/History.svg',
    topic: 'history',
    arrow: '/Icons/Next.svg',
  },
  {
    id: 'humor',
    label: 'HUMOR',
    icon: '/Icons/Humour.svg',
    topic: 'humor',
    arrow: '/Icons/Next.svg',
  },
  {
    id: 'adventure',
    label: 'ADVENTURE',
    icon: '/Icons/Adventure.svg',
    topic: 'adventure',
    arrow: '/Icons/Next.svg',
  },
  {
    id: 'politics',
    label: 'POLITICS',
    icon: '/Icons/Politics.svg',
    topic: 'politics',
    arrow: '/Icons/Next.svg',
  },
];

export const DEBOUNCE_DELAY = 300;
export const BOOKS_PER_PAGE = 32;