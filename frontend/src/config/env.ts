/**
 * Centralized Application Environment Configuration
 * 
 * Supports local development with default fallbacks and production 
 * deployments on AWS Amplify via NEXT_PUBLIC_ environment variables.
 */

export const API_BASE_URL: string =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

export const SOCKET_URL: string =
  process.env.NEXT_PUBLIC_SOCKET_URL ||
  (process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/v1\/?$/, '')
    : 'http://localhost:4000');
