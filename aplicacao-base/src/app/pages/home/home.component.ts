import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemonDTO } from 'src/app/shared/interfaces/pokemon.interface';
import { PokeApiService } from 'src/app/shared/services/poke-api/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teste: any = ''
  pokemon$!: Observable<IPokemonDTO>;

  constructor(private pokeApiService: PokeApiService ) { }

  ngOnInit(): void {
    this.getPikachuDetails();
  }

  getPikachuDetails() {
    this.pokemon$ = this.pokeApiService.getPokemon('pikachu')
  }

}
 