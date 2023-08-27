import { api } from './serviceHelpers';

const fetchData = async (buildedQuery: string) => {
  const { data } = await api.get(`/?${buildedQuery}`);
  return data;
};

const fetchDetail = async (id: string) => {
  const { data } = await api.get(`/?i=${id}`);
  return data;
};

export const omdbapiService = {
  fetchData,
  fetchDetail
};