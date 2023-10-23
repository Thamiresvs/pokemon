import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
    });

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate the correct image URL', () => {
    component.numero = 1; // For example, setting the Pokemon number to 1
    const expectedUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';

    const imageUrl = component.getImagePokemon();

    expect(imageUrl).toEqual(expectedUrl);
  });

  it('should format number with leading zeros', () => {
    const formattedNumber = component.leadingZero(1, 3);

    expect(formattedNumber).toEqual('001');
  });

  it('should not add leading zeros if not needed', () => {
    const formattedNumber = component.leadingZero(123, 3);

    expect(formattedNumber).toEqual('123');
  });
});
