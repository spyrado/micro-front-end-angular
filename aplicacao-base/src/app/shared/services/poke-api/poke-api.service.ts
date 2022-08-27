import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPokemonDTO } from '../../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemon(pokemonName: string) {
    return this.http.get<IPokemonDTO>(`${environment.apiUrl}/pokemon/${pokemonName}`)
  }
}
