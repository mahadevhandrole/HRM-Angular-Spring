import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCallComponent } from './student-call.component';

describe('StudentCallComponent', () => {
  let component: StudentCallComponent;
  let fixture: ComponentFixture<StudentCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
