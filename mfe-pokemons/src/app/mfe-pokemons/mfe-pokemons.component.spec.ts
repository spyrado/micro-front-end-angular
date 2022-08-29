import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfePokemonsComponent } from './mfe-pokemons.component';

describe('MfePokemonsComponent', () => {
  let component: MfePokemonsComponent;
  let fixture: ComponentFixture<MfePokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfePokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
