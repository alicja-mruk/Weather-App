import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export enum CacheKey {
  Weather = 'weather',
}
