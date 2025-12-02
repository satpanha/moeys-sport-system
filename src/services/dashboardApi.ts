import { apiClient } from './apiClient';
import { DashboardStats, Province, RecentRegistration } from '@/types';

export interface DashboardData {
  stats: DashboardStats;
  provinces: Province[];
  recentRegistrations: RecentRegistration[];
}

export const dashboardApi = {
  // Get dashboard overview data
  getDashboardData: async (): Promise<DashboardData> => {
    return apiClient.get<DashboardData>('/dashboard');
  },

  // Get dashboard statistics only
  getStats: async (): Promise<DashboardStats> => {
    return apiClient.get<DashboardStats>('/dashboard/stats');
  },

  // Get provinces with medal data
  getProvinces: async (): Promise<Province[]> => {
    return apiClient.get<Province[]>('/provinces');
  },

  // Get recent registrations
  getRecentRegistrations: async (): Promise<RecentRegistration[]> => {
    return apiClient.get<RecentRegistration[]>('/registrations/recent');
  },
};
