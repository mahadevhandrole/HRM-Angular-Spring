import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDasboardComponent } from './company-dasboard.component';

describe('CompanyDasboardComponent', () => {
  let component: CompanyDasboardComponent;
  let fixture: ComponentFixture<CompanyDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
