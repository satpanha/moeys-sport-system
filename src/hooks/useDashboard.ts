import { useState, useEffect } from 'react';
import { dashboardApi, DashboardData } from '../services/dashboardApi';
import { DashboardStats, Province, RecentRegistration } from '@/types';

interface UseDashboardReturn {
  dashboardData: DashboardData | null;
  stats: DashboardStats | null;
  provinces: Province[];
  recentRegistrations: RecentRegistration[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useDashboard = (): UseDashboardReturn => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await dashboardApi.getDashboardData();
      setDashboardData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch dashboard data');
      console.error('Dashboard data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  useEffect(() => {
    // Subscribe to global dashboard refresh events
    let unsubscribe: (() => void) | null = null;
    try {
      // dynamic import to avoid SSR issues
      import('../lib/eventBus').then((mod) => {
        unsubscribe = mod.onDashboardRefresh(() => fetchDashboardData());
      });
    } catch (err) {
      // ignore errors in environments without window
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return {
    dashboardData,
    stats: dashboardData?.stats || null,
    provinces: dashboardData?.provinces || [],
    recentRegistrations: dashboardData?.recentRegistrations || [],
    loading,
    error,
    refetch: fetchDashboardData,
  };
};
