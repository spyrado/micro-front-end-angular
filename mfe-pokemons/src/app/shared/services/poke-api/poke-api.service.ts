import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPokemonDTO } from '../../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get<IPokemonDTO>(`${environment.urlApi}/pokemon`)
  }
}
