import { useState, useEffect } from 'react';
import { athleteApi, AthleteFilters } from '../services/athleteApi';
import { Athlete } from '@/types';

interface UseAthletesReturn {
  athletes: Athlete[];
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  totalPages: number;
  refetch: (filters?: AthleteFilters) => Promise<void>;
  createAthlete: (athleteData: Omit<Athlete, 'id'>) => Promise<void>;
  updateAthlete: (id: string, athleteData: Partial<Athlete>) => Promise<void>;
  deleteAthlete: (id: string) => Promise<void>;
}

export const useAthletes = (initialFilters?: AthleteFilters): UseAthletesReturn => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchAthletes = async (filters?: AthleteFilters) => {
    try {
      setLoading(true);
      setError(null);
      const response = await athleteApi.getAthletes(filters);
      setAthletes(response.athletes);
      setTotal(response.total);
      setPage(response.page);
      setTotalPages(response.totalPages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch athletes');
      console.error('Athletes fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const createAthlete = async (athleteData: Omit<Athlete, 'id'>) => {
    try {
      const newAthlete = await athleteApi.createAthlete(athleteData);
      setAthletes(prev => [...prev, newAthlete]);
      setTotal(prev => prev + 1);
    } catch (err) {
      throw err;
    }
  };

  const updateAthlete = async (id: string, athleteData: Partial<Athlete>) => {
    try {
      const updatedAthlete = await athleteApi.updateAthlete(id, athleteData);
      setAthletes(prev => prev.map(athlete =>
        athlete.id === id ? updatedAthlete : athlete
      ));
    } catch (err) {
      throw err;
    }
  };

  const deleteAthlete = async (id: string) => {
    try {
      await athleteApi.deleteAthlete(id);
      setAthletes(prev => prev.filter(athlete => athlete.id !== id));
      setTotal(prev => prev - 1);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchAthletes(initialFilters);
  }, []);

  return {
    athletes,
    loading,
    error,
    total,
    page,
    totalPages,
    refetch: fetchAthletes,
    createAthlete,
    updateAthlete,
    deleteAthlete,
  };
};
