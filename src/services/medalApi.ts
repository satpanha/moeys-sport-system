import { apiClient } from './apiClient';
import { Medal } from '@/types';

export interface MedalFilters {
  sportId?: string;
  provinceId?: string;
  page?: number;
  limit?: number;
}

export interface MedalListResponse {
  medals: Medal[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const medalApi = {
  getMedals: async (filters?: MedalFilters): Promise<MedalListResponse> => {
    return apiClient.get<MedalListResponse>('/medals', filters);
  },

  getMedal: async (id: string): Promise<Medal> => {
    return apiClient.get<Medal>(`/medals/${id}`);
  },

  awardMedal: async (data: Partial<Medal>): Promise<Medal> => {
    return apiClient.post<Medal>('/medals/award', data);
  },
};

export default medalApi;
