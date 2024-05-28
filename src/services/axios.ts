import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'http://192.168.1.21:3000',
});
