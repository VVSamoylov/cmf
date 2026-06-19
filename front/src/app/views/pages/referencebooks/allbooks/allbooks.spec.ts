import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allbooks } from './allbooks';

describe('Allbooks', () => {
  let component: Allbooks;
  let fixture: ComponentFixture<Allbooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allbooks],
    }).compileComponents();

    fixture = TestBed.createComponent(Allbooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
