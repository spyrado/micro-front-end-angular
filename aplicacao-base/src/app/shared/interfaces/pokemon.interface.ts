export interface IPokemonDTO {
  species: {
    name: string;
  },
  sprites: {
    back_default: string;
  }
  types: [
    {
      type: {
        name: string;
      }
    }
  ]
}