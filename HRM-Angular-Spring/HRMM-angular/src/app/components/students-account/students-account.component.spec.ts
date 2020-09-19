import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAccountComponent } from './students-account.component';

describe('StudentsAccountComponent', () => {
  let component: StudentsAccountComponent;
  let fixture: ComponentFixture<StudentsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
