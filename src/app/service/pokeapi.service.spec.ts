import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokeapiService } from './pokeapi.service';

describe('PokeapiService', () => {
  let service: PokeapiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeapiService]
    });
    service = TestBed.inject(PokeapiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of Pokémon', () => {
    const mockResponse = {
      results: [
        { name: 'pokemon1', url: 'url1' },
        { name: 'pokemon2', url: 'url2' },
        // Add more Pokémon as needed
      ]
    };

    service.carregarPokemons().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon?limit=15');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
