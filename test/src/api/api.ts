import axios from 'axios';
import { CountryDetails } from 'pages/CountryPage/types';
import { CountryData } from './types';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

export const api = {
  getCountries() {
    return instance.get<CountryData[]>('/all?field=name,flags,capital');
  },

  getCountry(name: string) {
    return instance.get<CountryDetails[]>(`/name/${name}`);
  },
};
