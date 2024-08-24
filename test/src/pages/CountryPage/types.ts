import { CountryData } from 'api/types';

export interface CountryDetails extends Omit<CountryData, 'capital'> {
  region: string;
  capital: string;
  subregion: string;
  population: number;
  continents: string[];
}
