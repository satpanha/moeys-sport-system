import { useState } from 'react';
import { athleteApi } from '../services/athleteApi';
import { Athlete, FormData } from '@/types';

interface UseRegisterAthleteReturn {
  registerAthlete: (data: FormData) => Promise<Athlete>;
  loading: boolean;
  error: string | null;
}

export const useRegisterAthlete = (): UseRegisterAthleteReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerAthlete = async (data: FormData): Promise<Athlete> => {
    try {
      setLoading(true);
      setError(null);
      const athleteData: Omit<Athlete, 'id'> = {
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        gender: 'other',
        province: data.province ?? '',
        sports: data.selectedSport ? [data.selectedSport] : [],
        email: '',
        phone: data.phoneNumber,
        registrationDate: new Date().toISOString(),
        status: 'pending',
      };
      const result = await athleteApi.createAthlete(athleteData);
      // Inform dashboard to refresh since a new athlete was added
      try {
        const { emitDashboardRefresh } = await import('../lib/eventBus');
        emitDashboardRefresh();
      } catch {
        // no-op if bus not available for SSR/edge
      }
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { registerAthlete, loading, error };
};

export default useRegisterAthlete;
