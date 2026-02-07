// src/types/book.types.ts

export interface Author {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

export interface Translator {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

export interface Format {
  [key: string]: string;
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  translators: Translator[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
}

export interface BooksResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}

export interface Genre {
  id: string;
  label: string;
  icon: string;
  topic: string;
}

export interface SearchFilters {
  genre?: string;
  searchQuery?: string;
  languages?: string[];
}

export interface ViewableFormat {
  format: 'html' | 'pdf' | 'txt';
  url: string;
}
