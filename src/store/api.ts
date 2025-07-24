import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './apiClient';

export const api = createApi({
  baseQuery,
  reducerPath: 'api',
  tagTypes: ['Countries'],
  endpoints: () => ({}),
});
