import { Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MfePokemonsComponent } from './mfe-pokemons/mfe-pokemons.component';

import { MfePokemonsModule } from './mfe-pokemons/mfe-pokemons.module';

@NgModule({
  imports: [
    BrowserModule,
    MfePokemonsModule,
    HttpClientModule
  ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const mfePokemonsElement = createCustomElement(MfePokemonsComponent, { injector: this.injector });
    customElements.define('mfe-pokemons', mfePokemonsElement);
  }
}
