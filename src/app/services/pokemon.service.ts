import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }
  async carregarPokemons() {
    // USANDO SUBSCRIBE
    // this.httpClient.get('https://pokeapi.co/api/v2/pokemon')
    //   .subscribe((response: any) => {
    //     console.log(response);
    //   });

    // USANDO ASYNC AWAIT
    // const requisicao = await this.httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe((response: any) => {
    //   console.log(requisicao);
    // }
    // );

    // USANDO LASTVALUEFROM
    const requisicao = await lastValueFrom(this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151'));
    this.pokemons = requisicao.results;
    // console.log(this.pokemons);

  }
}
