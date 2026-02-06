// src/utils/constants.ts - WITH CUSTOM ICON SUPPORT

import { Genre } from '@/types/book.types';

/**
 * GENRE CONFIGURATION
 * 
 * HOW TO USE CUSTOM ICONS FROM YOUR LOCAL MACHINE:
 * 
 * Option 1: Using Emoji Icons (Current - Simple)
 * Just replace the emoji in the 'icon' field below
 * 
 * Option 2: Using Image Files
 * 1. Place your icon images in /public/icons/ folder
 *    Example: /public/icons/fiction.png
 * 2. Change icon field to: icon: '/icons/fiction.png'
 * 3. Update GenreCard.tsx to render <img> instead of emoji
 * 
 * Option 3: Using SVG Icons
 * 1. Place SVG files in /public/icons/ folder
 * 2. Or import SVG as React components (recommended for best performance)
 * 
 * EXAMPLE WITH IMAGE FILES:
 * {
 *   id: 'fiction',
 *   label: 'FICTION',
 *   icon: '/icons/fiction.png',  // Path to your image
 *   topic: 'fiction',
 *   description: 'Imaginative narratives and stories',
 * }
 */

export const GENRES: Genre[] = [
  {
    id: 'fiction',
    label: 'FICTION',
    icon: '📚',  // Replace with '/icons/fiction.png' for custom image
    topic: 'fiction',
    description: 'Imaginative narratives and stories',
  },
  {
    id: 'drama',
    label: 'DRAMA',
    icon: '🎭',  // Replace with '/icons/drama.png' for custom image
    topic: 'drama',
    description: 'Theatrical works and plays',
  },
  {
    id: 'humor',
    label: 'HUMOR',
    icon: '😄',  // Replace with '/icons/humor.png' for custom image
    topic: 'humor',
    description: 'Comedy and satirical works',
  },
  {
    id: 'politics',
    label: 'POLITICS',
    icon: '⚖️',  // Replace with '/icons/politics.png' for custom image
    topic: 'politics',
    description: 'Political theory and governance',
  },
  {
    id: 'philosophy',
    label: 'PHILOSOPHY',
    icon: '🤔',  // Replace with '/icons/philosophy.png' for custom image
    topic: 'philosophy',
    description: 'Philosophical thought and wisdom',
  },
  {
    id: 'history',
    label: 'HISTORY',
    icon: '📜',  // Replace with '/icons/history.png' for custom image
    topic: 'history',
    description: 'Historical accounts and records',
  },
  {
    id: 'adventure',
    label: 'ADVENTURE',
    icon: '🗺️',  // Replace with '/icons/adventure.png' for custom image
    topic: 'adventure',
    description: 'Tales of exploration and daring',
  },
];

export const DEBOUNCE_DELAY = 300; // Reduced from 500ms for faster response
export const BOOKS_PER_PAGE = 32; // API default