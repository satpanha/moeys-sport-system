import { apiClient } from './apiClient';
import { ExportType } from '@/types';

export const exportApi = {
  createExport: async (type: ExportType, options: any): Promise<{ id: string } | void> => {
    return apiClient.post('/exports', { type, options });
  },

  getExportPreview: async (type: ExportType, id: string): Promise<any> => {
    return apiClient.get<any>(`/exports/${type}/preview/${id}`);
  },
};

export default exportApi;
