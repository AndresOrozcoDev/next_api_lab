import { promises as fs } from 'fs';
import path from 'path';
import { MockData, Municipio } from '../types/data';

const loadMock = async (): Promise<MockData> => {
  const filePath = path.join(process.cwd(), 'public', 'mock.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
};

export const getAllCities = async (): Promise<Municipio[]> => {
  const mock = await loadMock();
  return mock.data;
};

export const getCitiesPaginated = async ({page, pageSize, stateId}: {page: number; pageSize: number; stateId?: string}) => {
  let cities = await getAllCities();

  // Filtro opcional por estado
  if (stateId) { cities = cities.filter((c) => c.state_dane_code === stateId) }

  const total = cities.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = cities.slice(start, end);

  return { cities: paginated, total, totalPages };
};

export const getAllStates = async () => {
  const municipios = await loadMock();
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
