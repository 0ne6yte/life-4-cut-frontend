import axios from 'axios';

import { apiGenerator } from '@/apis/apiGenerator';

const BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : '/api';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

export const api = apiGenerator(instance).api.v1;
