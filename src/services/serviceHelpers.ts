import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    apikey: API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export const queryBuilder = (json: any) => {
  const query = Object.keys(json)
    .filter((key) => json[key] !== '')
    .map((key) => `${key}=${json[key]}`)
    .join('&');
  return query;
}