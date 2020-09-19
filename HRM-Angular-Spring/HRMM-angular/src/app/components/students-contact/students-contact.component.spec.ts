import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsContactComponent } from './students-contact.component';

describe('StudentsContactComponent', () => {
  let component: StudentsContactComponent;
  let fixture: ComponentFixture<StudentsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
