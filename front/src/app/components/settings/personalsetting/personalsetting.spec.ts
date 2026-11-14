import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personalsetting } from './personalsetting';

describe('Personalsetting', () => {
  let component: Personalsetting;
  let fixture: ComponentFixture<Personalsetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personalsetting],
    }).compileComponents();

    fixture = TestBed.createComponent(Personalsetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
