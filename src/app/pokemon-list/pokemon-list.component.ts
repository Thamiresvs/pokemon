import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../service/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons: any[] = [];

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.pokeapiService.carregarPokemons().subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }

}
