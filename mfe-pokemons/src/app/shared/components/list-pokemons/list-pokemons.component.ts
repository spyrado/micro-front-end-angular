import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeApiService } from '../../services/poke-api/poke-api.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {

  pokemons$!: Observable<any>;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokemons$ = this.pokeApiService.getAllPokemons();
    // Aqui você deve pegar todos os pokemons fazer um pipe e chamar outro serviço passandoa url para pegar
    // mais detalhes do pokemon como a foto dele.
    // this.pokeApiService
    //   .getAllPokemons()
    //   .pipe()
  }

}
