import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTasks } from './work-tasks';

describe('WorkTasks', () => {
  let component: WorkTasks;
  let fixture: ComponentFixture<WorkTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
