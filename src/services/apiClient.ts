import axios, { AxiosInstance, AxiosResponse } from 'axios';
import config from '../config/env';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    const baseURL = config?.api?.baseUrl || process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';
    const timeout = config?.api?.timeout || Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000;

    this.client = axios.create({
      baseURL,
      timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor for auth headers (if needed later)
    this.client.interceptors.request.use(
      (config: any) => {
        // Add auth token if available
        // const token = localStorage.getItem('authToken');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response: any) => response,
      (error: { response: { status: number; }; }) => {
        // Handle common errors
        if (error.response?.status === 401) {
          // Handle unauthorized
          console.error('Unauthorized access');
        } else if (error.response?.status >= 500) {
          // Handle server errors
          console.error('Server error');
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic GET request
  async get<T>(url: string, params?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(url, { params });
    return response.data;
  }

  // Generic POST request
  async post<T>(url: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(url, data);
    return response.data;
  }

  // Generic PUT request
  async put<T>(url: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(url, data);
    return response.data;
  }

  // Generic DELETE request
  async delete<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(url);
    return response.data;
  }
}

export const apiClient = new ApiClient();
