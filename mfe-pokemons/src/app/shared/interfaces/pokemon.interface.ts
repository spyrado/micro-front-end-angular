export interface IPokemonDTO {
  count: number;
  results: IPokemonList[]
}

export interface IPokemonList {
  name: string;
  url: string;
}