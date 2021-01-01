import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesCardsComponent } from './rides-cards.component';

describe('RidesCardsComponent', () => {
  let component: RidesCardsComponent;
  let fixture: ComponentFixture<RidesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
