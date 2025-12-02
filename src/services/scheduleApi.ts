import { apiClient } from './apiClient';
import { Schedule } from '@/types';

export interface ScheduleFilters {
  date?: string;
  sportId?: string;
  page?: number;
  limit?: number;
}

export interface ScheduleListResponse {
  schedules: Schedule[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const scheduleApi = {
  getSchedules: async (filters?: ScheduleFilters): Promise<ScheduleListResponse> => {
    return apiClient.get<ScheduleListResponse>('/schedules', filters);
  },

  getSchedule: async (id: string): Promise<Schedule> => {
    return apiClient.get<Schedule>(`/schedules/${id}`);
  },

  createSchedule: async (data: Partial<Schedule>): Promise<Schedule> => {
    return apiClient.post<Schedule>('/schedules', data);
  },
};

export default scheduleApi;
