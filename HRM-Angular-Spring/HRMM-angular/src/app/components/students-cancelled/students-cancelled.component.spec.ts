import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCancelledComponent } from './students-cancelled.component';

describe('StudentsCancelledComponent', () => {
  let component: StudentsCancelledComponent;
  let fixture: ComponentFixture<StudentsCancelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsCancelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
