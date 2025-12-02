import { apiClient } from './apiClient';
import { Sport } from '@/types';

export interface SportFilters {
  search?: string;
  category?: string;
  status?: 'upcoming' | 'ongoing' | 'completed';
  page?: number;
  limit?: number;
}

export interface SportResponse {
  sports: Sport[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const sportApi = {
  // Get all sports with optional filters
  getSports: async (filters?: SportFilters): Promise<SportResponse> => {
    return apiClient.get<SportResponse>('/sports', filters);
  },

  // Get single sport by ID
  getSport: async (id: string): Promise<Sport> => {
    return apiClient.get<Sport>(`/sports/${id}`);
  },

  // Create new sport
  createSport: async (sportData: Omit<Sport, 'id'>): Promise<Sport> => {
    return apiClient.post<Sport>('/sports', sportData);
  },

  // Update sport
  updateSport: async (id: string, sportData: Partial<Sport>): Promise<Sport> => {
    return apiClient.put<Sport>(`/sports/${id}`, sportData);
  },

  // Delete sport
  deleteSport: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/sports/${id}`);
  },

  // Get sport categories
  getCategories: async (): Promise<string[]> => {
    return apiClient.get<string[]>('/sports/categories');
  },
};
