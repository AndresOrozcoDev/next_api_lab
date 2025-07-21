import { promises as fs } from 'fs';
import path from 'path';
import { MockData, Municipio } from '../types/data';

const loadStates = async (): Promise<MockData> => {
  const filePath = path.join(process.cwd(), 'public', 'mock.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
};

export const getAllCities = async (): Promise<Municipio[]> => {
  const mock = await loadStates();
  return mock.data;
};

export const getAllStates = async () => {
  const municipios = await loadStates();
  const uniqueStates: Record<string, string> = {};

  municipios.data.forEach((item) => {
    if (!uniqueStates[item.state_dane_code]) {
      uniqueStates[item.state_dane_code] = item.state;
    }
  });

  return Object.keys(uniqueStates)
    .map((stateCode) => ({
      id: stateCode,
      state: uniqueStates[stateCode],
    }))
    .sort((a, b) => a.state.localeCompare(b.state));
};

export const getCitiesByStateId = async (stateId: string) => {
  const municipios = await loadStates();
  return municipios.data
    .filter((item) => item.state_dane_code === stateId)
    .map((item) => ({
      id: item.city_dane_code,
      city: item.city,
    }));
};
