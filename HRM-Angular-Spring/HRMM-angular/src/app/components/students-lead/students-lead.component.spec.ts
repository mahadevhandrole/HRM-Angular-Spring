import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsLeadComponent } from './students-lead.component';

describe('StudentsLeadComponent', () => {
  let component: StudentsLeadComponent;
  let fixture: ComponentFixture<StudentsLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
