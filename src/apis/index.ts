import axios from 'axios';

import { apiGenerator } from '@/apis/apiGenerator';

const instance = axios.create({
  baseURL: '/api',
  timeout: 30000,
});

export const api = apiGenerator(instance).api.v1;
