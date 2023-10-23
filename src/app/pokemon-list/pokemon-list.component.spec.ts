import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonListComponent } from './pokemon-list.component';
import { PokeapiService } from '../service/pokeapi.service';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokeapiService: jasmine.SpyObj<PokeapiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PokeapiService', ['carregarPokemons']);

    TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      providers: [
        { provide: PokeapiService, useValue: spy },
      ],
    });
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    pokeapiService = TestBed.inject(PokeapiService) as jasmine.SpyObj<PokeapiService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load Pokémon data', () => {
    const mockData = {
      results: [
        { name: 'pokemon1', url: 'url1' },
        { name: 'pokemon2', url: 'url2' },
        // Add more Pokémon as needed
      ],
    };

    pokeapiService.carregarPokemons.and.returnValue(of(mockData));

    component.carregarDados();

    expect(pokeapiService.carregarPokemons).toHaveBeenCalled();
    expect(component.pokemons).toEqual(mockData.results);
  });

  it('should handle errors', () => {
    const errorMessage = 'An error occurred';
    pokeapiService.carregarPokemons.and.returnValue(of({ results: [] }));

    component.carregarDados();

    expect(pokeapiService.carregarPokemons).toHaveBeenCalled();
    expect(component.pokemons).toEqual([]);
  });
});
