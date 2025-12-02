import { useState, useEffect } from 'react';
import { athleteApi } from '../services/athleteApi';
import { Athlete } from '@/types';

interface UseAthleteReturn {
  athlete: Athlete | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  updateAthlete: (data: Partial<Athlete>) => Promise<void>;
  deleteAthlete: () => Promise<void>;
}

export const useAthlete = (id: string | null): UseAthleteReturn => {
  const [athlete, setAthlete] = useState<Athlete | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAthlete = async () => {
    if (!id) return;
    try {
      setLoading(true);
      setError(null);
      const result = await athleteApi.getAthlete(id);
      setAthlete(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch athlete');
    } finally {
      setLoading(false);
    }
  };

  const updateAthlete = async (data: Partial<Athlete>) => {
    if (!id) return;
    const updated = await athleteApi.updateAthlete(id, data);
    setAthlete(updated);
  };

  const deleteAthlete = async () => {
    if (!id) return;
    await athleteApi.deleteAthlete(id);
    setAthlete(null);
  };

  useEffect(() => {
    fetchAthlete();
  }, [id]);

  return { athlete, loading, error, refetch: fetchAthlete, updateAthlete, deleteAthlete };
};

export default useAthlete;
