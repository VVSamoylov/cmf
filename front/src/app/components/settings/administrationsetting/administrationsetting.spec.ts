import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Administrationsetting } from './administrationsetting';

describe('Administrationsetting', () => {
  let component: Administrationsetting;
  let fixture: ComponentFixture<Administrationsetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Administrationsetting],
    }).compileComponents();

    fixture = TestBed.createComponent(Administrationsetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
