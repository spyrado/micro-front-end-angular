import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfePokemonsComponent } from './mfe-pokemons.component';
import { ListPokemonsModule } from '../shared/components/list-pokemons/list-pokemons.module';



@NgModule({
  declarations: [
    MfePokemonsComponent
  ],
  imports: [
    CommonModule,
    ListPokemonsModule
  ],
  exports: [
    MfePokemonsComponent
  ]
})
export class MfePokemonsModule { }
