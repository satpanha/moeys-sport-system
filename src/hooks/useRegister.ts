import { useState } from 'react';
import { registrationApi } from '../services/registrationApi';
import { emitDashboardRefresh } from '../lib/eventBus';
import { FormData } from '@/types';

interface UseRegisterReturn {
  submitRegistration: (formData: FormData) => Promise<void>;
  loading: boolean;
  error: string | null;
  success: boolean;
}

export const useRegister = (): UseRegisterReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitRegistration = async (formData: FormData): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await registrationApi.submitRegistration(formData);

      setSuccess(true);
      // notify dashboard subscribers that new registration has occurred
      emitDashboardRefresh();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed';
      setError(errorMessage);
      throw err; // Re-throw to allow component-level error handling if needed
    } finally {
      setLoading(false);
    }
  };

  return {
    submitRegistration,
    loading,
    error,
    success,
  };
};
