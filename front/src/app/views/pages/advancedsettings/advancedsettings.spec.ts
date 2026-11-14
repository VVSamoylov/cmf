import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advancedsettings } from './advancedsettings';

describe('Advancedsettings', () => {
  let component: Advancedsettings;
  let fixture: ComponentFixture<Advancedsettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Advancedsettings],
    }).compileComponents();

    fixture = TestBed.createComponent(Advancedsettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
