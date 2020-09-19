import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEmailComponent } from './student-email.component';

describe('StudentEmailComponent', () => {
  let component: StudentEmailComponent;
  let fixture: ComponentFixture<StudentEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
