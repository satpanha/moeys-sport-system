import { apiClient } from './apiClient';
import { FormData } from '@/types';

export const registrationApi = {
	submitRegistration: async (data: FormData): Promise<{ id: string } | void> => {
		// For now this interacts with backend route '/registrations'
		return apiClient.post('/registrations', data);
	},
};

export default registrationApi;
