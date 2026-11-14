import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swapdoc } from './swapdoc';

describe('Swapdoc', () => {
  let component: Swapdoc;
  let fixture: ComponentFixture<Swapdoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Swapdoc],
    }).compileComponents();

    fixture = TestBed.createComponent(Swapdoc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
