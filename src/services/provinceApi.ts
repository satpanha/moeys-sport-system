import { apiClient } from './apiClient';
import { Province } from '@/types';

export interface ProvinceFilters {
  search?: string;
  page?: number;
  limit?: number;
}

export interface ProvinceListResponse {
  provinces: Province[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const provinceApi = {
  getProvinces: async (filters?: ProvinceFilters): Promise<ProvinceListResponse> => {
    return apiClient.get<ProvinceListResponse>('/provinces', filters);
  },

  getProvince: async (id: string): Promise<Province> => {
    return apiClient.get<Province>(`/provinces/${id}`);
  },
};

export default provinceApi;
import { apiClient } from './apiClient';
import { Province } from '@/types';

export interface ProvinceListResponse {
  provinces: Province[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const provinceApi = {
  getProvinces: async (): Promise<ProvinceListResponse> => {
    return apiClient.get<ProvinceListResponse>('/provinces');
  },

  getProvince: async (id: string): Promise<Province> => {
    return apiClient.get<Province>(`/provinces/${id}`);
  },
};

export default provinceApi;
