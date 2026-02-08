import axios, { AxiosInstance } from 'axios';
import { BooksResponse, SearchFilters } from '@/types/book.types';

class ApiService {
  private api: AxiosInstance;
  private baseURL = 'https://gutendex.com';

  constructor() {
    this.api = axios.create({
      baseURL: this.baseURL,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }


  // Fetch books with filters and pagination
  
  async fetchBooks(page: number = 1, filters: SearchFilters = {}): Promise<BooksResponse> {
    try {
      const params: Record<string, string | number> = {
        page, mime_type: 'image/',
      };

      if (filters.genre) {
        params.topic = filters.genre;
      }

      if (filters.searchQuery?.trim()) {
        params.search = filters.searchQuery.trim();
      }

      if (filters.languages && filters.languages.length > 0) {
        params.languages = filters.languages.join(',');
      }

      const response = await this.api.get<BooksResponse>('/books', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  }

  
  // Fetch a single book by ID
  
  async fetchBookById(id: number) {
    try {
      const response = await this.api.get(`/books/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching book ${id}:`, error);
      throw error;
    }
  }

  
  // Fetch books by IDs
   
  async fetchBooksByIds(ids: number[]): Promise<BooksResponse> {
    try {
      const params = {
        ids: ids.join(','),
        mime_type: 'image/',
      };
      const response = await this.api.get<BooksResponse>('/books', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching books by IDs:', error);
      throw error;
    }
  }
}

export const apiService = new ApiService();
