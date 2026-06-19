import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nomenclature } from './nomenclature';

describe('Nomenclature', () => {
  let component: Nomenclature;
  let fixture: ComponentFixture<Nomenclature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nomenclature],
    }).compileComponents();

    fixture = TestBed.createComponent(Nomenclature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
