import { apiClient } from './apiClient';
import { LogEntry } from '@/types';

export interface LogListResponse {
  logs: LogEntry[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const adminApi = {
  getLogs: async (page = 1, limit = 20): Promise<LogListResponse> => {
    return apiClient.get<LogListResponse>('/admin/logs', { page, limit });
  },
};

export default adminApi;
