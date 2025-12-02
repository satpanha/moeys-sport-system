// Centralized app configuration using environment variables.
// Values prefixed with NEXT_PUBLIC_ are exposed to client bundles in Next.js.

export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

export interface AppConfig {
  api: ApiConfig;
}

export const config: AppConfig = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api',
    timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT || 10000),
  },
};

export default config;
