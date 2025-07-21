export type Municipio = {
  city_dane_code: string;
  city: string;
  state_dane_code: string;
  state: string;
  id: string;
};

export type MockData = {
  data: Municipio[];
};
