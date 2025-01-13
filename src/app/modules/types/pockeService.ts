export interface dataPockemon {
  name: string;
  url: string;
}
export interface listPockemon {
  count: number;
  next: string;
  previous: null | string;
  results: dataPockemon [];
}
