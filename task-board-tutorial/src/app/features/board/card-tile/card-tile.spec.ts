import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTile } from './card-tile';

describe('CardTile', () => {
  let component: CardTile;
  let fixture: ComponentFixture<CardTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
