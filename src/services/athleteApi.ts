import { apiClient } from './apiClient';
import { Athlete } from '@/types';

export interface AthleteFilters {
  search?: string;
  province?: string;
  sport?: string;
  page?: number;
  limit?: number;
}

export interface AthleteListResponse {
  athletes: Athlete[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const athleteApi = {
  getAthletes: async (filters?: AthleteFilters): Promise<AthleteListResponse> => {
    return apiClient.get<AthleteListResponse>('/athletes', filters);
  },

  getAthlete: async (id: string): Promise<Athlete> => {
    return apiClient.get<Athlete>(`/athletes/${id}`);
  },

  createAthlete: async (athleteData: Omit<Athlete, 'id'>): Promise<Athlete> => {
    return apiClient.post<Athlete>('/athletes', athleteData);
  },

  updateAthlete: async (id: string, athleteData: Partial<Athlete>): Promise<Athlete> => {
    return apiClient.put<Athlete>(`/athletes/${id}`, athleteData);
  },

  deleteAthlete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/athletes/${id}`);
  },

  searchAthletes: async (query: string): Promise<Athlete[]> => {
    return apiClient.get<Athlete[]>('/athletes/search', { q: query });
  },
};

export default athleteApi;
