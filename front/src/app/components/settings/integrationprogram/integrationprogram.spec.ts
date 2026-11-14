import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Integrationprogram } from './integrationprogram';

describe('Integrationprogram', () => {
  let component: Integrationprogram;
  let fixture: ComponentFixture<Integrationprogram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Integrationprogram],
    }).compileComponents();

    fixture = TestBed.createComponent(Integrationprogram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
