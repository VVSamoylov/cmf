import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selers } from './selers';

describe('Selers', () => {
  let component: Selers;
  let fixture: ComponentFixture<Selers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selers],
    }).compileComponents();

    fixture = TestBed.createComponent(Selers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
